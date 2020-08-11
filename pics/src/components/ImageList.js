import './ImageList.css'
import ImageCard from './ImageCard'
import React from 'react';




const ImageList = (props) => {
const images =   props.images.map( (image) =>{ // Mapping 
          return(
              < ImageCard key={image.id} image={image} /> // API call property
          )

    })

    return(
        <div className="image-list">{images}</div>
    )

}


export default ImageList