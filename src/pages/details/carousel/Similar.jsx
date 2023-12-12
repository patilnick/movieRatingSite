import React from 'react'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel';


const Similar = ({mediaType,id}) => {

    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar?`);

  return (
    <div>
      <Carousel
        title="Similar"
        endPoint={mediaType}
        data={data?.results}
        loading={loading}
      />
    </div>
  )
}

export default Similar
