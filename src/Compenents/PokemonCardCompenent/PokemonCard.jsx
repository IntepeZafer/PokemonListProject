import ProperTypes from 'prop-types'

const PokemonCard = ({pokemon}) => {
  return (
    <div>
        <h1>Pokemon Name : {pokemon.name}</h1>
    </div>
  )
}

PokemonCard.propTypes = {
  pokemon: ProperTypes.array
}

export default PokemonCard


{/* <p>Pokemon ID:{pokemon.id}</p>
        <h1>Pokemon Name:{pokemon.name}</h1>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>Exprience:{pokemon.exprience}</p>
        <p>Abilities:{pokemon.abilities}</p>
        <p>Width : {pokemon.width}</p>
        <p>Height : {pokemon.heigth}</p>
        <p>Types : {pokemon.types}</p> */}