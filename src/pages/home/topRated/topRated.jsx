import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

const TopRated = () => {

  const [endPoint,setEndPoint] = useState("tv");

  const {data,loading} = useFetch(`/${endPoint}/top_rated?`)

    const onTabChange = (tab) =>{
      setEndPoint(tab === "Movie" ? "movie":"tv");
    };
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Top Rated</span>
        <SwitchTabs data={["TV","Movie"]} onTabChange= {onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint}>

      </Carousel>
    </div>
  )
}

export default TopRated
