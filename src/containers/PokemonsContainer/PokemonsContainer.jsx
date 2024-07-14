import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PokemonComponent from '../../components/PokemonsComponent'
import {
  fetchPokemons,
  fetchPokemonsByName,
  setModalOpened,
} from '../../store/apiSlice'
import { apiSlice } from '../../store/selectors'

const PokemonsContainer = () => {
  const { pokemons, statusLoading, isModalOpen } = useSelector(apiSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemons())
  }, [])

  const handleGetPokemonInfo = function (name) {
    dispatch(setModalOpened())
    dispatch(fetchPokemonsByName(name))
  }

  if (statusLoading === 'idle') {
    return (
      <>
        <PokemonComponent
          pokemons={pokemons}
          handleGetPokemonInfo={handleGetPokemonInfo}
        />
      </>
    )
  } else if (statusLoading === 'error') {
    return <div>Error</div>
  } else if(statusLoading === 'loading' && !isModalOpen) {
    return <div>Loading</div>
  }
}

export default PokemonsContainer
