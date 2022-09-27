import { useSearchParams} from "react-router-dom";




const Movie = () =>{

    const [params] = useSearchParams();

    let movie = params.get("movie");
     
    movie = JSON.parse(movie)

    


    return(
    <>
    <p>Nome: {movie.title}</p>
    <p>Lang: {movie.original_language}</p>
    <p>Review: {movie.overview}</p>
    </>
    )}
    
    export default Movie;