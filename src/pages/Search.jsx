import {useSearchParams} from "react-router-dom";

import GetMovies from "../components/GetMovies";

const searchAPI = import.meta.env.VITE_SEARCH;
const keyAPI = import.meta.env.VITE_API_KEY;





const Search = () =>{

    const [searchParams] = useSearchParams();
    const query = searchParams.get("valor");

    const URL_searchMovie = `${searchAPI}?${keyAPI}&query=${query}`; 

    return(
    <section>
    <GetMovies url={URL_searchMovie} 
    title={`Resultado para a busca: ${query}`} 
    subtitle="This is all that us can find"
    effect={query}/>
    </section>
    )

    }
    
    export default Search;