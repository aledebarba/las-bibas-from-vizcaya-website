import React, { useContext } from 'react';
import styled from 'styled-components'
import Slider from 'react-slick'
import { WordpressContext } from './wordpress';

const ImageGallerySection = styled.section`
  padding: 0;
  margin: 0 auto;
  width: 90%;

  div {
    img {
      border-radius: 24px;
    }
  }
  
  p { 
      padding: 8px; 
      background-color: #117EC9;
      color: white;
      box-shadow: inset -3px -3px 10px #00000088;
     }

  h1 { 
    width: 50%;
    color: #117EC9;
    text-transform: uppercase;
    border-bottom: 1px solid #117EC9;
    margin-top: 128px;
    margin-left: 16px;
  }
  `

export const ImageGallery = ({title, images}) => {
  
  const settings = {
    dots: false,
    slidesToShow: 5,
    arrows: true,
    infinite: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1 
        }
      },
      {
        breakpoint: 900, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1 
        }
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1 
        }
      }
    ]
  };

  return (
    <ImageGallerySection>
      <div id="images"></div>
      <h1>{title}</h1>
      <Slider {...settings}>
        { images.map((image, index) => 
           <StyledGalleryItem key={title+index}>
                <div>
                    <img src={image.sizes.medium} alt={image.title} />
                </div>
                <p>{image.description}</p>      
            </StyledGalleryItem>
      )}
      </Slider>
    </ImageGallerySection>
  )
}

export const Galleries = () => {

    const { status, data } = useContext(WordpressContext)
    return <>
    {status === 'ok' && data.galleries.map( (gallery, index) => {
      console.log(gallery.gallery_images)
      return(<ImageGallery 
        title={gallery.gallery_name} 
        images={gallery.gallery_images}
        key={'galleris_key_'+index}
        />)
})}
    </>
}

const StyledGalleryItem = styled.div`
    padding: 16px;
    position: relative;
    color: #2d2d2d;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;


    div.gatsby-image-wrapper {
        box-sizing: border-box;
        padding: 0;
        width: 95%;
        margin: 16px auto;
        border-style: solid;
        border-width: 2px;
        border-radius: 15%;
        overflow: hidden;
    }

    p { display: none }
    
` 