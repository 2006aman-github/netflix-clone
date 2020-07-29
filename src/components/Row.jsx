import React, {useEffect, useState} from 'react'
import axios from '../axios'
import requests from '../requests';
import './row.css'

const BASE_URL = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchURL}) {
    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        
        async function fetchData(){
            const request = await axios.get(fetchURL)
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchURL])
    console.log(Movies);
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {Movies.map(movie => (
                <img className="poster__image" src={`${BASE_URL}${movie.poster_path}`} alt=""/>
                ))}
            </div>
        </div>
    )
}

export default Row
