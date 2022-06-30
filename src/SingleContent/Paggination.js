import { Pagination} from "@mui/material";
import { purple } from "@mui/material/colors";
import { createTheme,ThemeProvider } from '@mui/material/styles'

const darkTheme=createTheme({
    palette:{
        danger: '#e53e3e',
    },
})


const Paggination=({setPage,numofPages=10})=>{

const handlePageChange=(page)=>{
    setPage(page);
    window.scroll(0,0);
};

    return (<div 
        style={{width:"100%",display:"flex",justifyContent:"center" ,marginTop:10
    }}>

        <ThemeProvider theme={darkTheme}>
        <Pagination count={numofPages} variant="outlined"
        onChange={(e)=>handlePageChange(e.target.textContent)}/>
        </ThemeProvider>
    </div>);
};

export default Paggination;