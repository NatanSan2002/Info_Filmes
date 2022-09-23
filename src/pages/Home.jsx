import {useState,useEffect} from "react";

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


return(
    <section className="container"> 
    <h2 className="title"> Best Movies </h2>
    <article className="movies_container">
    {topMovies.length <= 0 ? <p>Loading...</p> : topMovies.map((i) => {
        return <p>Título Filme: {i.title}</p>
        })}
   
    </article>
    </section>
    )}
    
    export default Home;