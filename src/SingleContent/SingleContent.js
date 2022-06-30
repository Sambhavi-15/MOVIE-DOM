import { Badge } from "@mui/material";
import * as React from 'react';
import "./SingleContent.css"
import { useEffect, useState } from "react";
import { color } from "@mui/system";
  


const sz='https://image.tmdb.org/t/p/w300';

const SingleContent=(
    {
        id,poster,title,date,media_type,vote_average,overview
    }
)=>{


    React.useEffect(()=>{
    if(media_type==="tv")
   media_type="tv";
   else
   media_type="movie";
       
         
          },[media_type]);
    

         
    
    const[video,setVideo]=useState([]);
    
    const fetchVideo=async()=>{
        const url=`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=ef8b36760d90ad6b06752ad5c50d2253&language=en-US`
        const response=await fetch(url);
        const resJson=await response.json();
        console.log(resJson);
        setVideo(resJson.results);
    }
    
     
    
    
    
    useEffect(()=>{
        fetchVideo();
    },[]);

    return( 
        
       
        
            <div className="media">
            <Badge badgeContent={vote_average} color={vote_average>6?"primary":"secondary"}/>
            <img  className="poster" src={`${sz}${poster}`} alt={title}/>
            <br/>
            <b className="title" style={{ color:"white"}}>{title}</b>
            <br/>
            <span className="subtitle">
                {media_type=="tv"?"TV Series":"Movie"}
                <span className="subtitle">{date}</span>
            </span>
            <br/>
            <div style={{color:"#b3b300", fontStyle: "oblique" , textAlign:"center" }}>{overview}</div>
            <br/>
           <div style={{textAlign:"center" , paddingBottom:"5px"}}>
           <a href="https://www.youtube.com"><button style={{ backgroundColor:"black" ,color:"white"}}>TRAILER</button></a>
           </div>
           
            </div>
      
      
    )
};
export default SingleContent;


