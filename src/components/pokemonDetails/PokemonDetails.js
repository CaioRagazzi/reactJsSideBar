import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import RingLoader from "react-spinners/RingLoader";
import './PokemonDetails.css'

export default function PokemonDetails(props) {
    const { name, url } = props

    const [isLoading, setIsLoading] = useState(false)
    const [pokemonName, setPokemonName] = useState('')
    const [pokemonImage, setPokemonImage] = useState('')
    const [pokemonInfo, setPokemonInfo] = useState(null)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        setIsLoading(true)
        axios.get(url).then(response => {
            setPokemonInfo(response.data)
            axios.get(response.data.forms[0].url).then(res => {
                setPokemonImage(res.data.sprites.front_default)
                setIsLoading(false)
            })
        })

        setPokemonName(name)
    }

    return (
        <div className="card text-center shadow">
            {
                isLoading ?
                    <RingLoader />
                    :
                    <div>
                        <img className="card-img-top" src={pokemonImage} alt="Avatar"></img>
                        <Link to={{ pathname: "/Pokemon", state: { info: pokemonInfo } }}>
                            <h1 className="card-title text-responsive"><b>{pokemonName}</b></h1>
                        </Link>
                    </div>
            }
        </div>
    )
}
