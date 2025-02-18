import PokemonCard from './Compenents/PokemonCardCompenent/PokemonCard';
import {fetchPokemonList , fetchPokemonDetails} from './Services/PokemonServices'
import { useState , useEffect} from 'react'

import './App.css'


function App() {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    fetchPokemonList()
    .then((pokemonList) => {
      const pokemonWithDetailsPromises = pokemonList.map(poke => fetchPokemonDetails(poke.url));

      Promise.all(pokemonWithDetailsPromises)
      .then(pokemonWithDetails => {
        setPokemon(pokemonWithDetails) 
      }).catch(error => {
        console.error('Error fetching Pokémon details:', error);
        throw error;
      })

    }).catch(error => {
      console.error('Error fetching Pokémon list:', error);
      throw error;
    })
  } , []);
  return (
    <>
    <div>
      {
        pokemon.map((pokemon , index) => {
          return <PokemonCard key={index} pokemon={pokemon} />
        })
      }
    </div>
    </>
  )
}

export default App
