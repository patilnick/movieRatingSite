import { useState,useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useSelector,useDispatch } from 'react-redux';
import { getApiConfiguration,getGenres } from './store/homeSlice';
import { BrowserRouter,Route,Routes} from "react-router-dom"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from './pages/home/Home';
import PageNotFound from "./pages/404/PageNotFound"
import SearchResult from "./pages/searchResult/SearchResult"
import Explore from "./pages/explore/Explore"
import Details from "./pages/details/Details"

function App() {

  const dispatch = useDispatch();
  const {url} = useSelector((state)=> state.home);

  useEffect(
    ()=>{
      apiConfiguration();
      genreCall();
    },[]
  );

  const apiConfiguration = () =>{
    fetchDataFromApi('/configuration?')
      .then((res) => {
        console.log(res);

        const url = {
          backdrop:res.images.secure_base_url + "original",
          profile:res.images.secure_base_url + "original",
          poster:res.images.secure_base_url + "original",
        }

        dispatch(getApiConfiguration(url))
      })
  }

  const genreCall = async() =>{
    let endPoint = ["tv","movie"];
    let promises = [];
    let allGenres = {};
    
    endPoint.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list?`))
    })

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
  });

    dispatch(getGenres(allGenres))
  }

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<PageNotFound/>} />
        <Route path='/:mediaType/:id' element={<Details/>} />
        <Route path='/explore/:mediaType' element={<Explore/>} />
        <Route path='/search/:query' element={<SearchResult/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
