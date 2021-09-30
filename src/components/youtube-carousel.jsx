import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import YoutubeCard from './youtube-cards'
import styled from 'styled-components'

const YoutubeFeed = () => {
    return(<section>
                <YoutubeCarousel 
                    chanel='Las Bibas From Vizcaya'
                    videos={[
                        {
                            videoId: '8901748913749',
                            title: 'Buona Sera Catuxa',
                            author: 'Las Bibas From Vizcaya'
                        },
                         {
                            videoId: '8901748913749',
                            title: 'Buona Sera Catuxa',
                            author: 'Las Bibas From Vizcaya'
                        },
                         {
                            videoId: '8901748913749',
                            title: 'Buona Sera Catuxa',
                            author: 'Las Bibas From Vizcaya'
                        }]} />
            </section>)
}

export default YoutubeFeed; 

export const YoutubeCarousel = ({chanel, videos}) => {
    const settings = {
        dots: false,
        slidesToShow: 5,
        arrows: true,
        infinite: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1280, 
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1 
            }
          },
          {
            breakpoint: 800, 
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
    
    
    return(
    <StyledSlider>
    <Slider {...settings} >
      { videos.map( (video, index) => 
        <div key={'youtube-video-'+index}>
          <YoutubeCard
              videoId={video.id}
              title={video.title}
              author={video.author}
          />
        </div>
        )
      }
    </Slider>
  </StyledSlider>)
}

/// styles
const StyledSlider = styled.div`
  width: 90%;
  min-width: 300px;
  margin: 16px auto;
  `
  