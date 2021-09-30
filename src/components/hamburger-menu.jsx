import React, { useState, useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { WordpressContext } from './wordpress';
import lasbibasImg from '../../static/menu-pose.png'

const offlineMenuItems = [ 
  { text: "WORK", link: "#work", type: "main"},
  { text: "ABOUT", link: "#about", type: "main"},
  { text: "IMAGES", link: "#images", type: "main"},
  { text: "CONTACT", link: "#contact", type: "main"}
]

const open = '☰ MENU'
const close = 'X CLOSE'

export const HamburgerMenu = () => {
    
    const { status, data } = useContext(WordpressContext);
    const [ menuVisible, setMenuVisible ] = useState(true);
    
    return (
      <>
      <UnderLayer isVisible={menuVisible} onClick={()=>{  setMenuVisible(!menuVisible); }} />
      <StyledContent isVisible={menuVisible} >
        <button
          className="menu-button"
          onClick={() => {
            setMenuVisible(!menuVisible);
          }}
        >
          {!!menuVisible || <span>{open} </span>}
          {!menuVisible  || <span>{close}</span>}
        </button>
        <div className="menu">
          <SvgImage />
          <ul>
              { offlineMenuItems.map( (item, index) => (
              <li key={'menu-item-'+index}>
                <a href={item.link} className={item.type} onClick={() => setMenuVisible(!menuVisible) }>
                  {item.text}
                </a>
              </li>
            ))}
            { status === "ok" && data.social_networks_links.map( (item, index) => (
              <li key={'online-menu-item'+index}>
                <a href={item.link} target="_blank" rel="noreferrer" className={'social'} >
                  {item.name}
                </a>
              </li>
              )) }            
            </ul>
        </div>
      </StyledContent>
      </>
    );
  };
  
  /// styles - base global styles is reset.css
 const UnderLayer = styled.div`
      position: fixed;
      background-color: #000000dd ;
      top: 0; left: 0;
      width: ${props => props.isVisible ? "100vw" : "0px" };
      height: ${props => props.isVisible ? "100vh" : "0px" };
      opacity: ${props => props.isVisible ? 1 : 0 };
      transition: opacity 500ms linear;
      z-index: 100;
  `
  const menuButtonFlick = keyframes`
    10% { box-shadow: 0 0 18px 0 orange, 0 0 8px 0 yellow, 0 0 3px 0 white,
          inset 0 0 3px 0 white; }
    11% { box-shadow: none }
    12% { box-shadow: 0 0 18px 0 orange, 0 0 8px 0 yellow, 0 0 3px 0 white,
          inset 0 0 3px 0 white; }
    13% { box-shadow: none }
    14% { box-shadow: 0 0 18px 0 orange, 0 0 8px 0 yellow, 0 0 3px 0 white,
          inset 0 0 3px 0 white; }
    15% { box-shadow: 0 0 18px 0 orange, 0 0 8px 0 yellow, 0 0 3px 0 yellow,
          inset 0 0 3px 0 yellow; }
    20% { box-shadow: 0 0 18px 0 orange, 0 0 8px 0 yellow, 0 0 3px 0 white,
          inset 0 0 3px 0 white;}
    21% { box-shadow: none }
    22% { box-shadow: 0 0 18px 0 orange, 0 0 8px 0 yellow, 0 0 3px 0 white,
          inset 0 0 3px 0 white; }
    23% { box-shadow: none }
    24% { box-shadow: 0 0 18px 0 orange, 0 0 8px 0 yellow, 0 0 3px 0 white,
          inset 0 0 3px 0 white;}
    25% { box-shadow: 0 0 18px 0 orange, 0 0 8px 0 yellow, 0 0 3px 0 white,
          inset 0 0 3px 0 white; }
    30% { box-shadow: 0 0 18px 0 orange, 0 0 8px 0 yellow, 0 0 3px 0 white,
          inset 0 0 3px 0 white; }
    100% { box-shadow: 0 0 18px 0 orange, 0 0 8px 0 yellow, 0 0 3px 0 white,
          inset 0 0 3px 0 white; }
  `;

  const StyledContent = styled.div`
    --right: 100vw;
    --menu-width: 100vw;
    --menu-button-top: 40px;
      position: relative;
  
    @media (min-width: 320px) {
      --menu-width: 100vw;
      --menu-button-top: 40px;
    }
    @media (min-width: 480px) {
      --menu-button-top: 8vw;
      --menu-width: 90vw;
    }
    @media (min-width: 768px) {
      --menu-width: 80vw;
      --menu-button-top: 8px;
    }
  
    .menu {
      position: fixed;
      right: ${(props) => (props.isVisible ? "0px" : "-100vw")};
      height: 100vh;
      width: 90vw;
      transition: right 500ms ease-in-out;
      z-index: 10000;
    }
  
    .lasbibas {
      height: 100%;
      x: 16; // svg-property
      left: 16;
    }
    
    ul {
      position: absolute;
      top: 0;
      right: 0;
      list-style: none;
      margin: 10vh 10vw 0 0;
      height: 70%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      li { 
        margin: 0;
        padding: 0;
        line-height: 1;

        a { 
          font-family: var(--font-primary);
          font-weight: bold;
          text-transform: uppercase;
          line-height: 1.2; 
          text-shadow: 3px 3px 10px black;        
        }

        a.main{
          color: white;
          font-size: clamp(24px, 4.2vw, 80px);
          &:hover {
            color: gold;
            transition: all 350ms ease;
          }
        }

        a.social {
          color: navajowhite;
          font-size: clamp(16px, 1.8vw, 60px);
          &:hover {
            color: gold;
            transition: all 500ms ease;
          }
        }

        }
      }
      
    .menu-button {
      position: fixed;
      top: 16px;
      right: 16px;
      z-index: 100000;
      outline: 0;
      color: white;
      border: 1px solid white;
      background-color: #00000033;
      padding: 12px 24px;
      border-radius: 99px;
      font-weight: 800;
      box-shadow: 0 0 8px 0 white;
      text-shadow: 0 0 8px white;
      cursor: pointer;
      animation: ${menuButtonFlick} 10s linear infinite;
      &:hover {
        box-shadow: 0 0 18px 0 orange, 0 0 8px 0 yellow, 0 0 3px 0 white,
          inset 0 0 3px 0 white;
      }
    }
  
    svg {
      position: absolute;
      width: 90vw;
      height: auto;
      min-width: 400px;
      max-height: 100vh;
      top: 0;
      right: 0;
    }
  `
  
  // svg
  const Svg = styled.svg.attrs({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  })``;
  
  const SvgImage = () => (
    <Svg viewBox="0 0 100 100">
      <polygon
        className="small"
        points="5,7 150,7 150,90 25,90"
        fill="url(#menu-fill-small)"
      />
      <polygon
        className="medium"
        points="25,7 150,7 150,90 37,90"
        fill="url(#menu-fill-medium)"
      />
      <polygon points="35,7 150,7 150,90 55,90" fill="url(#menu-fill)" />
      <image
        className="lasbibas"
        href={lasbibasImg}
      />
      <linearGradient id="menu-fill" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgb(210,151,82)" stopOpacity="90%" />
        <stop offset="93%" stopColor="rgb(46,20,7)" stopOpacity="90%" />
        <stop offset="94%" stopColor="red" />
        <stop offset="95%" stopColor="orange" />
        <stop offset="96%" stopColor="yellow" />
        <stop offset="97.5%" stopColor="green" />
        <stop offset="98%" stopColor="blue" />
        <stop offset="99%" stopColor="indigo" />
        <stop offset="100%" stopColor="violet" />
      </linearGradient>
    </Svg>
  );
  