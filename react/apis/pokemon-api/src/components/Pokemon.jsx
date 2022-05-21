import React, { useState } from 'react';




const Pokemons = ()=>{
    let [pokemonList, setPokemonList] = useState([])

    const getPokemon = ()=>{
        console.log("getting the Pokemon now...")
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response =>{
                return response.json()
            })
            .then(convertedResponse =>{
                console.log("got the response ---> ", convertedResponse)
                setPokemonList(convertedResponse.results)
            })
            .catch(err=>{
                console.log(err)
            })
    }



    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            {
                pokemonList.map((pokemon, idx)=>{
                    return(
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