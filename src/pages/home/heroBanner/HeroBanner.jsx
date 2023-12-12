import React, { useEffect } from 'react'
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import useFetch from '../../../hooks/useFetch';
import "./style.scss";
import { useSelector } from 'react-redux';
import Img from "../../../components/lazyLoader/Img"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"

const HeroBanner = () => {

    const [background,setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const searchQueryHandle = (event) =>{
        if(event.key === "Enter" && query.length>0){
            navigate(`/search/${query}`)
        }
    }
    const {data,loading} = useFetch("/movie/upcoming?");
    const { url } = useSelector((state)=>state.home)
    useEffect(() =>{
      const bg = url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
      setBackground(bg);
    },[data]);

    console.log(background)

    

  return (
    <div className="heroBanner">
      {!loading && <div className="backdropImage">
        <Img src={background} />
      </div>}

      <div className="opacityLayer"></div>

      <ContentWrapper>
        
          <div className="heroBannerContent">
              <spam className="title">Welcome</spam>
              <span className="subtitle">Explore milions of movies and their reviews and rating om our movie app.</span>
              <div className="searchBar">
                  <input type="text" placeholder="Search for a movie" onKeyUp={searchQueryHandle} onChange={(e)=>setQuery(e.target.value)}/>
                  <button>Search</button>
              </div>
          </div>
        
      </ContentWrapper>
      
    </div>
  )
}

export default HeroBanner
