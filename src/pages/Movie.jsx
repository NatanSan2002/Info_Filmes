import { useSearchParams} from "react-router-dom";

import style from "../components/CSS/Movie.module.css"

import {FaStar} from "react-icons/fa";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
  } from "react-icons/bs";



  const IMG_API = import.meta.env.VITE_IMG;





const Movie = () =>{

    const [params] = useSearchParams();
    let movie = params.get("movie");
    movie = JSON.parse(movie)



    return(
    <section className={style.container}>
    <article>
    <div className={style.background}>
    <img src={`${IMG_API}/${movie.backdrop_path}`} alt={`Imagem Filme: ${movie.title}`} className={style.img_back}/>
    <div className={style.content}> 
    <h1>{movie.title}</h1>
    <div className={style.info}>
    <img src={`${IMG_API}/${movie.poster_path}`} alt={`Imagem Filme: ${movie.title}`} />
    <div>
     <p>Idioma Original: {movie.original_language.toUpperCase()}</p>
     <p>Título Original: {movie.title}</p> 
     <p>Data de Lançamento: {movie.release_date.replaceAll("-","/")}</p>
     <div> 
    <p>Avaliação: <span className={style.avaliation} > {movie.vote_average} <FaStar/> </span>  (votos: {movie.vote_count})</p> 
    </div>    
    <p className={style.overview}>Sobre o  Filme: {movie.overview}</p> 

    </div>
    </div>

    
    </div>
    
    </div>
    </article>
    </section>
    )}
    
    export default Movie;