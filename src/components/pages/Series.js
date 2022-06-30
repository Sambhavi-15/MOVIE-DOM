import { useEffect, useState } from "react";

import "./Trending.css"
import SingleContent from "../../SingleContent/SingleContent";
import Paggination from "../../SingleContent/Paggination";



const Series=()=>{
    const[page,setPage]=useState(1);
    const[content,setContent]=useState([]);
   

    const fetchseries=async()=>{
        const url=`https://api.themoviedb.org/3/discover/tv?api_key=ef8b36760d90ad6b06752ad5c50d2253&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&page=${page}`
        const response=await fetch(url);
        const resJson=await response.json();
        console.log(resJson);
        setContent(resJson.results);
    }
    
    useEffect(()=>{
        fetchseries();
    },[page]);
    

    


    return(
       <div>
       
           
       <span className="pageTitle">Series</span>
        <div className="trending">
           
       
       
       
      
       
             {content && content.map((c)=>(<SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title||c.name}
              date={c.first_air_date||c.release_date} media_type={"tv"} vote_average={c.vote_average} overview={c.overview}/>))}
            </div>
           
        <div style={{backgroundColor:"#2d313a"}}>   <Paggination setPage={setPage} numofPages={500}/></div>
        </div>
    )
}

export default Series