export const structureStatsOfPokemon = function (stats) {
  const pokemonStats = stats.map(stat => {
    let statName = stat.stat.name
    if (stat.stat.name === 'special-attack') {
      statName = 'specialAttack'
    } else if (stat.stat.name === 'special-defense') {
      statName = 'specialDefense'
    }
    const statValue = stat.base_stat
    return {
      name: statName,
      value: statValue,
    }
  })
  return pokemonStats
}

export const structureTypesOfPokemon = function (types) {
  const pokemonTypes = types.map(type => {
    return type.type.name
  })
  return pokemonTypes
}

export const structureHeightOfPokemon = function (height) {
  let structeredHeight = ''
  if (height == 10) {
    structeredHeight = `${height.toString().slice(0, 1)}.0 m`
  } else if (height < 10) {
    structeredHeight = `0.${height.toString()} m`
  } else if (height > 10) {
    structeredHeight = `${height.toString().slice(0, 1)}.${height
      .toString()
      .slice(1, 2)} m`
  }
  return structeredHeight
}

export const structureWeightOfPokemon = function (weight) {
  let structeredWeight = ''
  if (weight <= 100) {
    structeredWeight = `${weight.toString().slice(0, 1)}.${weight
      .toString()
      .slice(1, 2)} kg`
  } else if (weight > 100) {
    structeredWeight = `${weight.toString().slice(0, 2)}.${weight
      .toString()
      .slice(2, 3)} kg`
  } else if (weight <= 10) {
    structeredWeight = `${weight.toString().slice(0, 1)}.0 kg`
  }
  return structeredWeight
}

export const structurePokemonData = function (data) {
  const pokemon = {
    logo: data.sprites.other.dream_world.front_default,
    name: data.name,
    power: data.base_experience,
    types: structureTypesOfPokemon(data.types),
    height: structureHeightOfPokemon(data.height),
    weight: structureWeightOfPokemon(data.weight),
    stats: structureStatsOfPokemon(data.stats),
  }
  return pokemon
}
