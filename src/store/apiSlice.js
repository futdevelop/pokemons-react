import { createSlice } from '@reduxjs/toolkit'
import usePokemonsApi from '../hooks/usePokemonsApi'

const initialState = {
  statusLoading: 'loading',
  pokemons: [],
  pokemon: null,
  isOpenModal: false,
}

export const fetchPokemons = () => dispatch => {
  const { getPokemons } = usePokemonsApi()
  dispatch(dataFetching())
  getPokemons()
    .then(data => dispatch(dataFetched(data)))
    .catch(() => dispatch(dataFetchedError()))
}

export const fetchPokemonsByName = name => dispatch => {
  const { getPokemonByName } = usePokemonsApi()
  dispatch(dataFetching())
  getPokemonByName(name)
    .then(data => dispatch(pokemonFetched(data)))
    .catch(() => dispatch(dataFetchedError()))
}

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    dataFetching: state => {
      state.statusLoading = 'loading'
    },
    dataFetched: (state, action) => {
      state.statusLoading = 'idle'
      state.pokemons = action.payload
    },
    pokemonFetched: (state, action) => {
      state.statusLoading = 'idle'
      state.pokemon = action.payload
    },
    dataFetchedError: state => {
      state.statusLoading = 'error'
    },
    setModalClosed: state => {
      state.isOpenModal = false
    },
    setModalOpened: state => {
      state.isOpenModal = true
    },
  },
})

const { actions, reducer } = apiSlice
export default reducer

export const {
  dataFetching,
  dataFetched,
  pokemonFetched,
  dataFetchedError,
  setModalClosed,
  setModalOpened,
} = actions
