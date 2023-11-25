import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import styles from "./styles.module.css"
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import SearchResult from './Components/SearchResult/SearchResult';
import EpisodeDetail from './Components/EpisodeDetail/EpisodeDetail';
function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  exact path='/profile/:pid' element={<Profile/>}/>
        <Route exact path='/search-result/:name' element={<SearchResult/>} />
        <Route exact path='/episode-detail/:eid' element={<EpisodeDetail/>} />
      </Routes>
      </BrowserRouter>
    </>
      
    
  );
}

export default App;
