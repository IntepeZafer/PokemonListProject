import ProperTypes from 'prop-types'

const PokemonCard = ({pokemon}) => {
  return (
    <div className='pokemon-card'>
        <h1>Pokemon ID : <span>{pokemon.id}</span></h1>
        <h1>Pokemon Name : <span>{pokemon.name}</span></h1>
        <img className='pokemon-image' src={pokemon.image} alt={pokemon.name} />
        <p>Exprience : {pokemon.experience}</p>
        <p>Abilities : {pokemon.abilities}</p>
        <p>Weight : {pokemon.weight}</p>
        <p>Height : {pokemon.height}</p>
        <p>Types : {pokemon.types}</p>
        <div className='back-image'></div>
    </div>
  )
}

PokemonCard.propTypes = {
  pokemon: ProperTypes.array
}

export default PokemonCard