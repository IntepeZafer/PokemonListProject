import axios from 'axios'

const fetchPokemonList  = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=200')
    .then((response) => {
        return response.data.results
    }).catch((error) => {
        console.error('Error fetching Pokémon list:', error);
        throw error;
    })
}

const fetchPokemonDetails = (url) => {
    return axios.get(url)
    .then(response => ({ 
        id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.front_default,
        experience: response.data.base_experience, 
        weight: response.data.weight, 
        height: response.data.height, 
        types: response.data.types.map(type => type.type.name),
        abilities: response.data.abilities.map(ability => ability.ability.name)
    }))
    .catch((error) => {
        console.error('Error fetching Pokémon details:', error);
        throw error;
    });
}

export {fetchPokemonList, fetchPokemonDetails}