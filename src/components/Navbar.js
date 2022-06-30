import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";



export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let navigate = useNavigate();
  React.useEffect(()=>{
   
    if(value==="recents") {
       navigate("../trending", { replace: true });
        }
    else if(value==="favorites") {
            navigate("../movies", { replace: true });
             }
    else if(value==="nearby") {
                navigate("../series", { replace: true });
                 }
    else
        {
           navigate("../search", { replace: true });
        }
     
      },[value,navigate]);

  return (
    <BottomNavigation sx={{ width: "100%",position:'fixed',bottom:0 ,backgroundColor:"black",zIndex:100}} value={value} onChange={handleChange}>
      <BottomNavigationAction style={{color:"white"}}
        label="Trending"
        value="recents"
        icon={<WhatshotIcon/>}
      />
      <BottomNavigationAction style={{color:"white"}}
        label="Movies"
        value="favorites"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction style={{color:"white"}}
        label="TV Series"
        value="nearby"
        icon={<TvIcon />}
      />
      <BottomNavigationAction style={{color:"white"}} 
      label="Search"
       value="folder"
        icon={<SearchIcon />} />
    </BottomNavigation>
  );
}
