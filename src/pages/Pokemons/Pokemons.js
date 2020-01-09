import React, { useState, useEffect } from 'react';
import PokemonDetails from '../../components/pokemonDetails/PokemonDetails'
import './Pokemons.css'
import axios from 'axios'

function Items() {

    const [pokemons, setPokemons] = useState([]);
    const [pages, setPages] = useState(0);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`).then(result => {
            setPages(result.data.count / 20)
            setPokemons(result.data.results);
        })
    }, [])

    return (
        <div>
            <h1>Pokémons</h1>
            {
                pokemons.map((pokemon, idx) => {
                    return (
                        <PokemonDetails key={idx} name={pokemon.name} url={pokemon.url}/>
                    )
                })
            }
        </div>
    );
}

export default Items;
