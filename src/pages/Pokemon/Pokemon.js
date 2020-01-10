import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Pokemon(props) {

    const [pokemonInfo, setPokemonInfo] = useState(null)

    useEffect(() => {
        console.log(props.location.state.info);
    }, [])

    return (
        <div>
        </div>
    )
}
