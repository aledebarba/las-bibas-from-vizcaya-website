import React, { useState, useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import Slider from 'react-slick'

// setup spotify data
// TODO get from wordpress options
 const clientId = '3cf319c33d2f45eab5fa70a289e49c3a' // developer ID
 const clientSecret = '8a769c36cfd54d76b5efc55ac2d53a7b'  // app Secret
 const artistId = '7GhwmwtgLfAAsjIHMEqhDg' // Las Bibas From Vizcaya unique ID

// get spotify token to authorize every data fetching
export const getToken = async () => {
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  })
  //TODO error handler
  const data = await result.json();
  return data ? data : null;  
}

// get this artist top 10 tracks
export const getTopTracks = async () => {

  let token = await getToken() // each data fetching needs a token
  // TODO should error handle if no token comes from spotify 

  const result = await fetch ("https://api.spotify.com/v1/artists/"+artistId+"/top-tracks?market=US", { 
    method: 'GET',
    headers: {
      'Content-Type':'application/json',
      'Authorization': token.token_type+" "+token.access_token,
      'Accept': 'application/json'
    }
  })
  // TODO Error handler
  const data = await result.json();
  return data ? data : null;
}

export const SpotifyCard = ({title, author, artist, poster, href}) => {

  // set deafault values 
  const track_author = author ? author : "Spotify Artist";
  const track_title  = title  ? title : "This is a very long title that will scroll so the user can read.";
  const track_artist = artist ? artist : "by Spotify";
  const track_poster = poster ? poster : "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=280&w=280"
  const track_link = href ? href : "https://spotify.com"

  return <>
  <StyledSpotifyCard>
    <div className='spotify-card'>
      <div className='spotify-card__body'>
        <a href={track_link} target='_blank' rel='noreferrer' alt={track_title} title={track_title}>
          <div className='spotify-card__body__image'>
            <img src={track_poster} alt={track_title+" illustration poster"} />
          </div>

          <SlidingText contentStyle={{textTransform: "uppercase"}}>
            {track_title}
          </SlidingText>
          <SlidingText>{track_author}</SlidingText>
          <SlidingText>{track_artist}</SlidingText>
          <IconPlay/>
        </a>
      </div>
    </div>
  </StyledSpotifyCard>
</>
}

export const SpotifyCarousel = ( { data } ) => {

  // set deafult content for carousel
  const cards = data ? data : dataPlaceholder;

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
        { cards.map( (card, index) => 
          <div key={'spotify-slider-card-'+index}>
            <SpotifyCard 
                title={card.title}
                href={card.href}
                author={card.author}
                artist={card.artist}
                poster={card.poster}
            />
          </div>
          )
        }
      </Slider>
    </StyledSlider>
    )
}
const StyledSlider = styled.div`
  width: 90%;
  min-width: 300px;
  margin: 32px auto 16px auto;
  `

export const TopTenCarousel = ( { client, secret, artist } ) => {
  const [data, setData] = useState([]);
  // get top ten from spotify API
  useEffect( () =>{
    async function getTracks() {
      let res = await getTopTracks();
      let cards = res.tracks.map( track => ({
        title: track.name,
        href: track.album.external_urls.spotify,
        author: track.artists.map( theArtist => theArtist.name ).join(' & '),
        artist: track.album.artists[0].name,
        poster: track.album.images[1].url
      }))
      setData( cards )
    }; 
    getTracks();
  },[])

  return (
    <>
      { data && <SpotifyCarousel data = { data } /> }
      { !data && <SpotifyCarousel /> }
    </>
  )
}

/// sliding text component
const slideAnimation = (size) => {
  const endOpacity = size > 0 ? 0 : 1;
  return(
    keyframes`
      0%   { left: 0; }
      30%  { left: 0; }
      90%  { opacity: 1; }
      100% { 
        opacity: ${endOpacity};
        left: ${size+'px'};
       }
    `
  )
}

const Container = styled.div`
  position: relative;
  width: ${props => props.width ? props.width : "100%" };
  height: 1.5em;
  overflow: hidden;
  background-color: ${props => props.color ? props.color : "transparent"};
`
const Content = styled.div`
  color: ${props => props.color ? props.color : "black"};
  font-size: ${props => props.fontsize ? props.fontsize : "0.8em"};
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  animation-duration: ${props => props.duration ? props.duration : "15s" }; 
  animation-timing-function: linear;
  animation-iteration-count: 2;
  animation-name: ${props => props.anim};
  white-space: nowrap;
`
export const SlidingText = ( { duration, width, ending, bgColor, color, children, contentStyle, containerStyle } ) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [anim, setAnim] = useState();

  useEffect(()=>{
    if (contentRef.current.clientWidth > containerRef.current.clientWidth) {
      setAnim(contentRef.current.clientWidth * -1)
    } else {
      setAnim(0)
    }
  },[])
  
  return (
    <Container style={containerStyle}
      ref={containerRef} 
      color={bgColor}
      width={width}>
      <Content style={contentStyle}
          ref={contentRef} 
          color={color}
          duration={duration}
          anim={slideAnimation(anim)}>
        { children }
      </Content>
    </Container>
  )
}

const StyledSpotifyCard = styled.div`
  .spotify-card {
    &__body {
      position: relative;
      width: 95%;
      max-width: 320px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px;
      background-color: ${ props => props.backgroundColor ? props.backgroundColor : "#f4f4f4" };
      border-radius: 8px;
      overflow: hidden;

      a {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        &:hover .spotify-card__body__image:after {
          border-left-color: yellowgreen;
          transition: all 0.3s linear;
        }
      }

      &__image {
        position: relative;
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0px 10px 3px #00000088;
        
        &:after {
          content: "";
          display: block;
          padding-bottom: 100%;
        }

        img {
          position: absolute; /* Take your picture out of the flow */
          top: 0;
          bottom: 0;
          left: 0;
          right: 0; /* Make the picture taking the size of it's parent */
          width: 100%; /* This if for the object-fit */
          height: 100%; /* This if for the object-fit */
          object-fit: cover; /* Equivalent of the background-size: cover; of a background-image */
          object-position: center;
        }
      }      
    }
  }
`
//  const rainbowborders = keyframes`
//   0% { border-left-color: red; }
//   16% { border-left-color: orange; }
//   32% { border-left-color: yellow; }
//   48% { border-left-color: green; }
//   64% { border-left-color: blue; }
//   80% { border-left-color: indigo; }
//   100% { border-left-color: purple;}
// `

const IconPlay = styled.button`
  position: absolute;
  width: 25%;
  height: 20%;
  top: 40%;
  left: 50%;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  border-left: 3px solid transparent;
  transform: perspective(500px) translate(-50%, -50%);
  background-color: transparent;
  cursor: pointer;

  &:after {
  content: "";
  position: absolute;
  width: 50%;
  height: 50%;
  top: 0;
  left: 2%;
  transform: perspective(500px) scaleX(2);
  background-image: linear-gradient(45deg, #ffffff 50%, transparent 50%);
  filter: drop-shadow(2px 0px 3px black);
  transition: all 200ms linear; 
  }

  &:before {
  content: "";
  position: absolute;
  width: 50%;
  height: 50%;
  bottom: 0;
  left: 2%;
  transform: perspective(500px) scaleX(2);
  background-image: linear-gradient(135deg, #ccc 50%, transparent 50%);
  filter: drop-shadow(2px 0px 3px black);
  transition: all 100ms ease-in-out;
  }

  &:hover:after {
    background-image: linear-gradient(45deg, #ff0000 50%, transparent 50%);
    filter: drop-shadow(12px 0px 3px black);
    transform: perspective(500px) scaleX(2) translate3d(50px);
    transition: all 100ms linear; 
    opacity: 0.8;
  }
  &:hover:before {
    background-image: linear-gradient(135deg, #aa0000 50%, transparent 50%);
    transition: all 100ms linear; 
    filter: drop-shadow(12px 0px 3px black);
    transform: perspective(500px) scaleX(2) translate3d(50px);
    opacity: 0.8;
  }
`

const dataPlaceholder = [
    {
      title: "Spotify track",
      artist: "The Artist",
      author: "By Spotify",
      poster: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=280&w=280",
      href: "https://spotify.com",
    },
    {
      title: "Spotify music",
      artist: "The Spotify Artist",
      author: "Various",
      poster: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=280&w=280",
      href: "https://spotify.com",
    },
    {
      title: "Spotify song",
      artist: "Top Spotify Artist",
      author: "Anonimous",
      poster: "https://images.pexels.com/photos/145707/pexels-photo-145707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=280&w=280",
      href: "https://spotify.com",
    },
    {
      title: "Spotify album",
      artist: "Artists Collective",
      author: "Don't apply",
      poster: "https://images.pexels.com/photos/4734716/pexels-photo-4734716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=280&w=280",
      href: "https://spotify.com",
    },
    {
      title: "Hear on",
      artist: "1Human",
      author: "1Human",
      poster: "https://images.pexels.com/photos/164827/pexels-photo-164827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=280&w=280",
      href: "https://spotify.com",
    }
  ];