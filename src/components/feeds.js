import React from "react";
import styled, { keyframes } from 'styled-components/macro'
import ytlogo from '../../static/youtube-neon.png'
import splogo from '../../static/spotify-neon.png'

const neonLogoBlink = (color) => keyframes`
  0% {opacity: 1;}
  2% {opacity: 0;}
  3% {opacity: 1;}
  4% {opacity: 0;}
  5% {opacity: 1;}
  10% {opacity: 1;}
  50% {opacity: 1;}
  52% {opacity: 0;}
  53% {opacity: 1;}
  54% {opacity: 0;}
  55% {opacity: 1;}
  65% {opacity: 0.8;}
  66% {opacity: 1;}
  67% {filter: drop-shadow(0px 0px 4px ${color} ); }
  69% {filter: drop-shadow(0px 0px 8px ${color} ); }
  72% {filter: drop-shadow(0px 0px 4px ${color} ); }
  90% {opacity: 1;}
  100% {opacity: 1;}
`
const NeonLogo = styled.div`
      --shadowColor:${props => props.type === 'spotify' ? 'green' : 'red'};
      width: 25vw;
      max-width: 500px;
      min-width: 220px;
      margin-left: 24px;
      animation: ${ props => neonLogoBlink(props.type === 'spotify' ? 'green' : 'red') } 5s linear infinite alternate;
      background-image: url(${props => props.logo });
      background-size: fit;
      filter: drop-shadow(0px 0px 4px var(--shadow-color)); 
      background-repeat: no-repeat;
      img {
        width: 100%;
      }
`
export const Feed = ({ type, logo, children }) => {
  return (
    <div css={`
      min-height: 33.33vh;
      margin: 32px auto 64px auto;
    `}
    className='saida'
    >
        <NeonLogo type={type}>
          <img src={  type === 'youtube' ? ytlogo
                     :type === 'spotify' ? splogo 
                     :'nologo.jpg' } 
                     alt={type + ' brand'}/>
        </NeonLogo>
        {children}
    </div>
  )
}

export const Feeds = ( { children } ) => <>
  <div css={`
    box-sizing: border-box;
    width: 100vw;
    overflow: hidden;
    margin: 0;
    background: radial-gradient(50% 50% at 25% 15%, rgba(68, 211, 65, 0.2) 35.18%, rgba(255, 0, 0, 0) 100%),  
              radial-gradient(50% 50% at 25% 75%, rgba(255, 0, 0, 0.5) 5%, rgba(0, 0, 0, 0) 100%), 
              black;
    background-position: 0% 50%;
  `}>
  <div id='work'></div>
      { children }
  </div>
</>