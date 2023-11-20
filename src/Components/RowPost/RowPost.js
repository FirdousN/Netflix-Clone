import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../Axios";
import { imageUrl,API_KEY } from "../../constants/constants.js";
import YouTube from "react-youtube";

const RowPost = (props) => {
    const [movie, setMovie] = useState([]);
    const [urlId, setUrlId] = useState("")
    useEffect(() => {
        axios.get(props.url).then(response=> {
              console.log("RowPost", response.data.results);
              setMovie(response.data.results);
            })
            .catch((err) => {
                console.log(err);
                // alert('Network Error')
            });
    },[props.url]);

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    const handleMovie =(id) =>{
      console.log(id);
      axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
        console.log(response.data.results);
        if(response.data.results.length !==0){
          setUrlId(response.data.results[0])
        }else{
          console.log("Array empty");
        }
      })
    }

    return (
      
      <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
          {movie.map((obj) => (

            <img onClick={()=>handleMovie(obj.id)} key={obj.id} className={props.isSmall ? 'smallPoster' : 'poster'} alt={obj.title}
              src={`${imageUrl}${obj.poster_path}`} // Use the correct property
            />
          ))}
        </div>
        {urlId &&  <YouTube videoId={urlId.key} opts={opts}  />}
      </div>
    );
};

export default RowPost;
