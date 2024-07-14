import axios from 'axios'
import { structurePokemonData } from '../utils'

const usePokemonsApi = () => {
  const _API_BASE = 'https://pokeapi.co/api/v2/pokemon/'

  const client = axios.create({
    baseURL: _API_BASE,
  })

  const getPokemons = async () => {
    const res = await client.get('?limit=9')
    return res.data.results
  }

  const getPokemonByName = async function (name) {
    const res = await client.get(`${name}/`)
    return structurePokemonData(res.data)
  }

  return { getPokemons, getPokemonByName }
}


export default usePokemonsApi;