import {useState,useEffect} from "react";
import MovieCard from "./MovieCard";

import "../components/CSS/MovieList.css";


function GetMovies({url,title,subtitle,effect}) {

    

    const [Movies,setMovies] = useState([]);
    
    const GetMovies = async (end) => {
    const res = await fetch(end);
    const data = await res.json();
    
    setMovies(data.results)
    
    
    }

    
    useEffect(() => {
        
     GetMovies(url);
    
    
    }, [effect])
    
    
    
    return(
        <section className="container_geral"> 
        <div className="title">
        <h2> {title}</h2>
        <p>{subtitle}</p>
        </div>
        <article className="container_movies">
        {Movies.length <= 0 ? <p>Loading...</p> : Movies.map((i) => {
            return <MovieCard key={i.id} movie={i}/>
            })}
    
    
     
       
        </article>
        </section>
    )
}


export default GetMovies