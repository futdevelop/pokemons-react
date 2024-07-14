import React from 'react'
import './styles.scss'

const PokemonComponent = ({ pokemons, handleGetPokemonInfo }) => {
  return (
    <div className='pokemons'>
      <h1 className='pokemons__title'>Pokemons</h1>
      <div className='pokemons__content'>
        {pokemons.map((pokemon, i) => (
          <div className='pokemons__block' key={i}>
            <span className='pokemons__block_num'>{i + 1}.</span>
            <div>{pokemon.name}</div>
            <button
              className='pokemons__btn'
              onClick={() => handleGetPokemonInfo(pokemon.name)}
            >
              Get Info
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonComponent
