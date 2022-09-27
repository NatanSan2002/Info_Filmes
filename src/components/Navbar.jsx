import { useState } from "react";
import {useNavigate} from "react-router-dom";
import style from "./CSS/Navbar.module.css"

import {Link} from "react-router-dom";
import {BiCameraMovie,BiSearchAlt2} from "react-icons/bi";


const Navbar = () =>{

  const [search,setSearch ] = useState("");
  const navigate = useNavigate()

  const SearcMovie = (e) => {
   e.preventDefault();
   if(!search) {
    return
   }else {
  navigate(`/search?valor=${search}`);
  setSearch("");
   }
  }

    return(
      <>
        <nav id="navbar" >
        <h2> 
          <Link to="/"> <BiCameraMovie/> InfoMovies</Link>
          </h2>
          <form onSubmit={SearcMovie}>
          <input 
          type="text" placeholder="Busque um filme" 
          onChange={(e) => setSearch(e.target.value)} value={search}/>
          <button type="submit">
            <BiSearchAlt2/>
          </button>
          </form>
        
      </nav>
      <div className={style.margin_nav}></div>
      </>
    )}
    
    export default Navbar;
