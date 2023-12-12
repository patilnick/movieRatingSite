import React from 'react'
import "./style.scss";
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import DetailBanner from './detailBanner/DetailBanner';
import Cast from './cast/Cast';
import VideoSection from './videoSection/VideoSection';
import Reccomendation from './carousel/Recommendation'
import Similar from './carousel/Similar'



const Details = () => {


  const {mediaType, id} = useParams();
  const {data,loading} = useFetch(`/${mediaType}/${id}/videos?`);
  const {data:credits,loading: creditLoading} = useFetch(`/${mediaType}/${id}/credits?`);

  console.log(credits);


  return (
    
    <div>
      <DetailBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <VideoSection video={data?.results} loading={loading}/>
      <Cast casts={credits?.cast} loading={creditLoading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Reccomendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details
