import React from 'react';
import styled from 'styled-components/macro';
import Slider from 'react-slick'

const Card = styled.div`
  padding: 32px;
  margin: 8px;  
  background-color: #bbb;
  border-radius: 8px;
  display: flex; 
  flex-direction: column;
  overflow: hidden;
  
  h1, h2 { 
    color: black;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1;
    margin: 0;
    padding: 0;
    max-width: 90%;
  }
  h1 { 
    margin-top: 16px;
    text-transform: uppercase;
    }
  h2 {
    font-weight: normal;
  }
  
  
  .poster {
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 16px;
    box-shadow: 5px 5px 6px 1px black, 0px 0px 32px 16px white;
    transition: all 300ms ease-out;
    &:hover {
      box-shadow:  15px 15px 10px 1px #00000088, 0px 0px 32px 16px white;
      transform: scale(1.05, 1.05) translate(-10px, -10px);
      transition: all 100ms ease-in;
    }
    img { 
      width: 100%;
    }

    
  }
` 
export const YoutubeCard = ({id, title, author }) => 
  <Card>
    <div className='poster'>
      <a href={"https://www.youtube.com/watch?v="+id} target='_blank' rel="noreferrer">
        <img src={"https://img.youtube.com/vi/" + id + "/0.jpg"} alt="youtube reference poster" />
      </a>
    </div>
    <h1>{title}</h1>
    <h2>{author}</h2>
  </Card>


export const YoutubeCarousel = ({chanel, videos}) => {
    const settings = {
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1400, 
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4 
            }
          },
          {
            breakpoint: 900, 
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3 
            }
          },
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1 
            }
          }
        ]
      };
    
    
    return(
        <Slider {...settings} >
          { videos.map( (video, index) => 
            <div key={video.id+index}>
                <YoutubeCard id={video.id} title={video.title} author={video.author} />
            </div>
          )}
        </Slider>
    )
}

export const YoutubeFeed = () => {
    return(
    <div css={`
      position: relative;
      padding: 0;
      margin: 0 auto 64px auto;
      width: 90%;`}>
          <YoutubeCarousel 
              chanel='Las Bibas From Vizcaya'
              videos={[
                  {
                      id: 'w62AEYJfMS0',
                      title: 'Buona Sera Catuxa',
                      author: 'Las Bibas From Vizcaya'
                  },
                    {
                      id: 'vy4wezSCi4Y',
                      title: 'Buona Sera Catuxa',
                      author: 'Las Bibas From Vizcaya'
                  },
                    {
                      id: 'vy4wezSCi4Y',
                      title: 'Buona Sera Catuxa',
                      author: 'Las Bibas From Vizcaya'
                  },
                    {
                      id: 'vy4wezSCi4Y',
                      title: 'Buona Sera Catuxa',
                      author: 'Las Bibas From Vizcaya'
                  },
                    {
                      id: 'VEsYL1x3994',
                      title: 'Buona Sera Catuxa',
                      author: 'Las Bibas From Vizcaya'
                  }]} />
      </div>)
}

/////

export const YoutubeVideoBackground = ({ title, videoId, scrollAnchor, position, overlayColor, overlayOpacity, overlayGrid }) => { return (
    <StyledYTVideoBackground 
        position={ position ? position : "absolute" }
        overlayColor={overlayColor}
        overlayOpacity={overlayOpacity}
        overlayGrid={overlayGrid}
        scrollAnchor={scrollAnchor}
        >
        <div className="video-background">
            <div className="video-foreground">
                <iframe src={"https://youtube.com/embed/" + videoId + "?mute=1&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=yNPcipztRAY"} frameBorder="0" allowFullScreen title="youtube video background"></iframe>
                <div className='video-overlay'></div></div>
            <div id='vidtop-content'>
                <div className="vid-info">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    </StyledYTVideoBackground>
)}
   
const StyledYTVideoBackground = styled.div`

        position: ${ props => props.position ? props.position : "absolute" };
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

    .video-foreground,
    .video-background iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
    }
    .video-overlay {
        --bgDotSize: 8px 8px;
        @media (min-width: 1440px) { --bgDotSize: 16px 16px; }
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        background-image: ${props => props.overlayGrid ? "linear-gradient(black 50%, transparent 50%), linear-gradient(90deg, black 50%, transparent 50%)" : "none" };
        background-size: var(--bgDotSize);
        background-color: ${ props => props.overlayColor ? props.overlayColor : "transparent" };
        opacity: ${ props => props.overlayOpacity ? props.overlayOpacity : 1 };
    }

    #vidtop-content {
    top: 0;
    color: #fff;
    }

    .vid-info {
    position: absolute;
    top: 50%;
    left: 5%;
    width: 33%;
    color: #fff;
    transform: translateY(-50%);
    }

    .vid-info h1 {
      font-size: clamp(32px, 25vw, 160px);
      line-height: 0.8;
  }

    .vid-info a {
    display: block;
    color: #fff;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.5);
    transition: 0.6s background;
    border-bottom: none;
    margin: 1rem auto;
    text-align: center;
    }

    @media (min-aspect-ratio: 16/9) {
    .video-foreground {
        height: 300%;
        top: -100%;
    }
    }
    @media (max-aspect-ratio: 16/9) {
    .video-foreground {
        width: 300%;
        left: -100%;
    }
    }
    @media all and (max-width: 600px) {
    .vid-info {
        width: 50%;
    }
    }
    @media all and (max-width: 500px) {
    .vid-info .acronym {
        display: none;
    }
    }

    .arrow-down {
    box-sizing: border-box;
    position: absolute;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 40px;
    height: 40px;
    border: 2px solid transparent;
    border-radius: 100px;
    bottom: 64px;
    left: 50%;
    transform: translateX(-50%);
    }

    .arrow-down::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    transform: rotate(45deg);
    left: 8px;
    top: 4px;
    }

`;
