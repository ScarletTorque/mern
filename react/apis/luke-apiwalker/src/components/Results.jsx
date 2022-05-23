import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const Results = () => {

    let { category, id } = useParams();


    let [detail, setDetail] = useState({});

    let [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
        .then(response => {
            setError(false);
            console.log("response---->", response)
            setDetail(response.data);

        })
        .catch(err => console.log(err))
        setError(true)
    }, [id, category])


    return (
        <div>
            {
                error === true?
                <>
                    <img src="https://www.denofgeek.com/wp-content/uploads/2019/08/star-wars-obi-wan-kenobi-1-scaled.jpg?fit=2560%2C1707" width="300px"></img>
                    <h1>These aren't the droids you're looking for</h1>
                </>
                    :
            category === "people"?
                <div>
                    <h1>Name: {detail.name}</h1>
                    <p>Height: {detail.height}</p>
                    <p>Mass: {detail.mass}</p>
                    <p>Hair Color: {detail.hair_color}</p>
                </div>: category === "planets"?
                <div>
                    <h1>Name: {detail.name}</h1>
                    <p>Climate: {detail.climate}</p>
                    <p>Terrain: {detail.terrain}</p>
                    <p>Population: {detail.population}</p>
                </div>: category === "species"?
                <div>
                    <h1>Name: {detail.name}</h1>
                    <p>Language: {detail.language}</p>
                    <p>Skin colors: {detail.skin_colors}</p>
                    <p>Classification: {detail.classification}</p>
                </div>: category === "films"?
                <div>
                    <h1>Title: {detail.title}</h1>
                    <p>Episode: {detail.episode_id}</p>
                    <p>Release Date: {detail.release_date}</p>
                    <p>Producer: {detail.producer}</p>
                </div>: category === "vehicles"?
                <div>
                    <h1>Name: {detail.name}</h1>
                    <p>Capacity: {detail.cargo_capacity}</p>
                    <p>Crew: {detail.crew}</p>
                    <p>Max Speed: {detail.max_atmosphering_speed}</p>
                </div>: category === "starships"?
                <div>
                    <h1>Name: {detail.name}</h1>
                    <p>Model: {detail.model}</p>
                    <p>Manufacturer: {detail.manufacturer}</p>
                    <p>Class: {detail.starship_class}</p>
                </div>:
                <h1>These aren't the droids you're looking for</h1>
            }

        </div>
    );
};



export default Results;