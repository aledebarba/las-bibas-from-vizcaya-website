import React from 'react';
import styled from 'styled-components';

const YoutubeCard = ({ videoID, title, author }) => {
    return (
      <>
        <StyledCard delay={Math.floor(Math.random() * 5) + 1}>
          <div className="predictaOverlay" />
          <div className="predictaScreen" />
          <div className="videoPoster">
            <img
              src={"https://img.youtube.com/vi/" + videoID + "/0.jpg"}
              alt="youtube reference poster image"
            />
          </div>
          <div className="videoData">
            <div className="videoTitle">{title}</div>
            <div className="videoAuthor">{author}</div>
          </div>
        </StyledCard>
      </>
    );
  };

  export default YoutubeCard;
  
  const blink = keyframes`
    0% { opacity: 0 }
    50% { opacity: 1 }
    100% { opacity: 0 }
  `;
  
  const blinkScreen = keyframes`
    0% { opactity: 1; }
    2% { opacity: 0; }
    3% { opacity: 1; }
    5% { opacity: 1; }
    7% { opacity: 0.8 ;}
    8% { opacity: 1; }
    15% { opacity: 1; }
    16% { 
          opacity: 0.4; 
          transform: translate(-50%, -50%);
  
    }
    17% { 
          opacity: 0.4; 
          transform: translate(-45%, -50%);
        }
  
  18% { 
        opacity: 0;
        transform: translate(-50%, -50%);
  
        }
    19% { 
          opacity: 0.4; 
          }
    20% {
        opacity: 1;
    }
    30% {
        opacity: 1;
        filter: brightness(90%) saturate(50%) hue-rotate(0deg);
    }
    31% {
        opacity: 0.5;
        filter:  brightness(90%) saturate(150%) hue-rotate(360deg);
    }
    40% {
        opacity: 1;
        filter: brightness(90%) saturate(50%) hue-rotate(0deg);
    }
    50% { opacity: 1; }
    100% { opacity: 1; }
  `;
  
  const StyledCard = styled.div`
    position: relative;
    width: 100%;
    max-width: 540px;
    min-width: 300px;
    padding-bottom: 5%;
    margin-left: 8px;
    margin-right: 8px;
  
    .videoPoster {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 85%;
      padding-bottom: 50%;
      margin-top: 12%;
      overflow: hidden;
      z-index: -2;
      border-radius: 12%;
      background-color:white;
    background-image: linear-gradient(90deg, rgba(0,0,0,.5) 50%, transparent 50%),
    linear-gradient(rgba(0,0,0,.7) 25%, transparent 25%, transparent 50%, #ff000044 50%,    #ff000088 75%, #00008833 75%);
      background-size: 5px 5px;
      
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        transition: all 300ms linear;
        filter: brightness(90%) saturate(50%);
        opacity: 1;
        animation: ${blinkScreen} 10s linear infinite;
        animation-delay: ${(props) => (props.delay ? props.delay : 3)}s;
      }
    }
  
    .predictaOverlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 660px;
      background-image: url("https://lasbibas.uxdir.com/files/predicta.png");
      background-repeat: no-repeat;
      background-size: contain;
      filter: drop-shadow(0 -15px 10px black);
    }
  
    .predictaScreen {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      padding-bottom: 80%;
      background-image: url("https://lasbibas.uxdir.com/files/predictascreen.png");
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
      transition: opacity 300ms linear;
  
      &:hover {
        opacity: 0.7;
        transition: opacity 300ms linear;
      }
      &:hover ~ .videoPoster img {
        transition: all 300ms linear;
        filter: brightness(130%) saturate(100%);
      }
      &:hover ~ .videoTitle {
        transition: all 300ms linear;
        color: white;
      }
    }
  
    .videoData {
      position: relative;
      margin-top: 88%;
      width: 80%;
      padding-bottom: 11%;
      min-width: 280px;
      margin-left: 10%;
      overflow: hidden;
  
      .videoTitle {
        font-size: 16px;
        margin: 0 0 0 0;
        padding: 0 0 0 5%;
        font-family: open24h;
        letter-spacing: 1px;
        text-shadow: 12px 6px 1px #00ff0045, -2px 0px 5px #9acd3245;
        color: yellowGreen;
        transition: all 300ms linear;
        max-width: 100%;
        overflow: hidden;
  
        &:after {
          content: "";
          width: 4px;
          height: 10px;
          background-color: #e4ff00;
          position: absolute;
          top: 20%;
          animation: ${blink} 300ms infinite;
        }
        &:before {
          position: absolute;
          content: ">";
          left: 0;
        }
  
        @media screen and (min-width: 320px) {
          font-size: calc(16px + 6 * ((100vw - 320px) / 320));
        }
  
        @media screen and (min-width: 1400px) {
          font-size: 32px;
        }
      }
  
      .videoAuthor {
        font-size: 12px;
        font-family: Montserrat;
        text-transform: uppercase;
        text-shadow: 0 -6px 1px #00000044, 0px 6px 1px #00000044;
        color: navajoWhite;
        opacity: 0.8;
        position: absolute;
        bottom: 0;
        left: 0;
        max-width: 100%;
        overflow: hidden;
  
        @media screen and (min-width: 320px) {
          font-size: calc(12px + 6 * ((100vw - 320px) / 680));
        }
  
        @media screen and (min-width: 1400px) {
          font-size: 24px;
        }
      }
    }
  `;
  