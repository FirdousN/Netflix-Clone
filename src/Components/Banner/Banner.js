import React ,{useEffect, useState}from "react";
import "./Banner.css";
import axios from "../../Axios";
import {API_KEY,imageUrl} from '../../constants/constants.js'

function Banner() {

    const [movie , setMovie] = useState({})
    useEffect(()=>{
        axios.get(`movie/popular?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
            console.log('Banner', response.data.results[1].title);
            setMovie(response.data.results[1])
          })
          .catch((error) => {
            console.error('Error fetching movie data:', error);
        });
    },[])

    return (
        <div 
        style={{backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""}}`}}
        className="banner">
            
            <div className="content">
                <h1 className="title">{movie ? movie.title :""}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    );
}

export default Banner;
