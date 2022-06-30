

import { Container } from "@mui/system";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css'
import Header from './components/Header';
import LabelBottomNavigation from './components/Navbar';
import Movies from "./components/pages/Movies";
import Search from "./components/pages/Search";
import Series from "./components/pages/Series";
import Trending from "./components/pages/Trending";

function App() {
  return (
    <BrowserRouter>
     <Header/>
    <div className="App">
    <Container>
    <Routes>
        <Route exact path='/trending' element={<Trending/>}/>
        <Route  exact path='/movies' element={<Movies/>}/>
        <Route exact path='/series' element={<Series/>}/>
        <Route exact path='/search' element={<Search/>}/>
        


      
      </Routes>
    </Container>
    </div>
     <LabelBottomNavigation/>
     </BrowserRouter>
  
   
  );
}

export default App;
