import React, { useState } from 'react';
import axios from 'axios';



const Pokemons = () => {
    let [pokemonList, setPokemonList] = useState([])

    const getPokemon = () => {
        console.log("getting the Pokemon now...")
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")

        .then(response => {
            console.log("got the response ---> ", response)
            setPokemonList(response.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }



    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            {
                pokemonList.map((pokemon, idx) => {
                    return (
                        <div key={idx}>
                            <h3>{pokemon.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Pokemons;