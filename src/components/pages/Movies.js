import { useEffect, useState } from "react";

import "./Trending.css"
import SingleContent from "../../SingleContent/SingleContent";
import Paggination from "../../SingleContent/Paggination";



const Movies=()=>{
    const[page,setPage]=useState(1);
    const[content,setContent]=useState([]);
   

    const fetchmovies=async()=>{
        const url=`https://api.themoviedb.org/3/discover/movie?api_key=ef8b36760d90ad6b06752ad5c50d2253&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`
        const response=await fetch(url);
        const resJson=await response.json();
        console.log(resJson);
        setContent(resJson.results);
    }
    
    useEffect(()=>{
        fetchmovies();
    },[page]);
    

    


    return(
       <div>
       <span className="pageTitle">Movies</span>
        <div className="trending">
           
       
       
       
       
       
             {content && content.map((c)=>(<SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title||c.name}
              date={c.first_air_date||c.release_date} media_type={c.media_type} vote_average={c.vote_average} overview={c.overview} />))}
            </div>
           
     <div     style={{ backgroundColor:"#2d313a"}}> <Paggination setPage={setPage} numofPages={500} color="primary" /></div>
        </div>
    )
}

export default Movies