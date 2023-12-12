import React from 'react'
import "./style.scss";
import { useSelector } from 'react-redux';


const Genre = ({data}) => {

    const {genre} = useSelector((state)=>state.home);

  return (
    <div className='genres'>
      {data?.map((g)=>{
        if(!genre[g]?.name) return;
        return(
            <div key={g} className="genre">
                { genre[g]?.name }
            </div>
        );
      })}
    </div>
  )
}

export default Genre
