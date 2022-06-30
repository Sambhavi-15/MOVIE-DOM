import { Button, Tab, Tabs, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import SingleContent from "../../SingleContent/SingleContent";
import Paggination from "../../SingleContent/Paggination";


const Search=()=>{


const [type,setType]=useState(0);
const [page,setPage]=useState(1);
const [searchText,setSearchText]=useState(" ");
const [content,setContent]=useState(0);
const [numofpage,setNumofpage]=useState(5);



const fetchSearch=async()=>{
    const url=`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=ef8b36760d90ad6b06752ad5c50d2253&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    const response=await fetch(url);
    const resJson=await response.json();
    console.log(resJson);
    setContent(resJson.results);
   
}

useEffect(()=>{
    window.scroll(0,0);
    fetchSearch();
},[type,page]);

    return(
        <div style={{ backgroundColor: "#804000"}}>
        <div style={{ display:"flex", margin:"15px 0"}}>
           <TextField style={{flex:1,color:"white",backgroundColor:"white"}} className="searchBox" label="Search" variant="filled" onChange={(e)=>setSearchText(e.target.value)} />
           <Button variant="contained" style={{marginLeft:10,backgroundColor:"black"}} onClick={fetchSearch}><SearchIcon/></Button>
        </div>
        <Tabs value={type} indicatorColor="primary" textColor="primary"
        onChange={(event,newValue)=>{
            setType(newValue);
            setPage(1);
        }} style={{paddingBottom:5}}>
           <Tab style={{width:"50%" ,color:"white"}} label="Search Movies"/>
           <Tab style={{width:"50%",color:"white"}} label="Search Series"/>

        </Tabs>
        <div className="trending">
             {content && content.map((c)=>(<SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title||c.name}
              date={c.first_air_date||c.release_date} media_type={type?"tv":"movies"} vote_average={c.vote_average} overview={c.overview} />))}

              {
                searchText&& !content && (type?<h2>No 
                    Series Found</h2>:<h2>No Movies Found</h2>)
              }
            </div>
            {
                numofpage>1 && (<Paggination setPage={setPage} numofPages={numofpage} variant="outlined" color="secondary" />)
            }
        </div>
    )
}

export default Search