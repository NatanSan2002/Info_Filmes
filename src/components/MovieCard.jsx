import {Link} from "react-router-dom";

import {FaStar} from "react-icons/fa";

const imageURL = import.meta.env.VITE_IMG;




const MovieCard = ({movie, full_view = true}) =>{
     
    let avaliation = [];
    let i;

     for(i=1;i<(Math.ceil(movie.vote_average))/2;++i){
     avaliation.push(i)
     }



    return(
    <div>
    <img src={`${imageURL}/${movie.poster_path}`} alt={`Imagem Filme ${movie.title}`} />
    <h2>{movie.title}</h2>
    <div><p>{avaliation.map( () => { return <FaStar/>})} {movie.vote_average}</p></div>
    <div> <p>{movie.release_date.replaceAll("-","/")}</p></div>
    {full_view && <Link to={`/movie/${movie.id}?movie=${JSON.stringify(movie)}`}><button> Details </button> </Link>}

    </div>
    )}
    
    export default MovieCard;