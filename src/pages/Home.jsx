import {useState,useEffect} from "react";
import MovieCard from "../components/MovieCard";

import "../components/CSS/MovieList.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = () =>{

const [topMovies,set_topMovies] = useState([])

const Set_TopMovies = async (url) => {
const res = await fetch(url);
const data = await res.json();

set_topMovies(data.results)



}



useEffect(() => {
    const URL_topmovies = `${moviesURL}top_rated?${apiKey}`;

    Set_TopMovies(URL_topmovies);


}, [])

console.log(topMovies)


return(
    <section className="container_geral"> 
    <div className="title">
    <h2> Best Movies </h2>
    <p>The best reviews off all time!</p>
    </div>
    <article className="container_movies">
    
    {topMovies.length <= 0 ? <p>Loading...</p> : topMovies.map((i) => {
        return <MovieCard key={i.id} movie={i}/>
        })}


 
   
    </article>
    </section>
    )}
    
    export default Home;