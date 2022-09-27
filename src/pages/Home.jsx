import {useState,useEffect} from "react";
import GetMovies from "../components/GetMovies";




const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const URL_topmovies = `${moviesURL}top_rated?${apiKey}`;


const Home = () =>{
    return (
  <section>

    <h2> Bem-vindo(a) a nossa Home Page</h2>
    <GetMovies url={URL_topmovies} title="Best Movies" subtitle="These are the highest rated movies of all time!"/>

   
    </section>
    
    )
}
    export default Home;