import axios from "axios";
import { useEffect, useState } from "react";
import Paggination from "../../SingleContent/Paggination";
import SingleContent from "../../SingleContent/SingleContent";
import "./Trending.css"


const Trending=()=>{


const[page,setPage]=useState(1);
const[content,setContent]=useState([]);

const fetchtrending=async()=>{
    const url=`https://api.themoviedb.org/3/trending/all/day?api_key=ef8b36760d90ad6b06752ad5c50d2253&page=${page}`
    const response=await fetch(url);
    const resJson=await response.json();
   console.log(resJson);
    setContent(resJson.results);
}

 



useEffect(()=>{
    fetchtrending();
},[page]);



    return(
        <div>
            <span className="pageTitle">Trending</span>
            
            <div className="trending">
             {content && content.map((c)=>(<SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title||c.name}
              date={c.first_air_date||c.release_date} media_type={c.media_type} vote_average={c.vote_average} overview={c.overview} />))}
            </div>
         <div style={{backgroundColor:"#2d313a"}}>   <Paggination setPage={setPage}/></div>
        </div>
    )
}

export default Trending