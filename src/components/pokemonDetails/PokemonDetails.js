import React, { useEffect, useState } from 'react'

export default function PokemonDetails(props) {

    const [pokemonName, setPokemonName] = useState('')

    useEffect(() => {
        setPokemonName(props.name)
        console.log(props);

    }, [])

    return (
        <div>
            <h1>{pokemonName}</h1>
        </div>
    )
}
