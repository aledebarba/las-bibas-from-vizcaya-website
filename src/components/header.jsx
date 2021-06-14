import React from 'react'
import { Async } from 'react-async';
import styled, { keyframes } from 'styled-components'
import options from './website-config.json'
import YoutubeVideoBackground from './YoutubeVideoBackground';

const loadPageHeader = async() => {
    const res = await fetch(options.endPoint.homePageContent)
    if (!res.ok) {
        console.log(res.statusText)
        throw new Error(res.statusText)
    }
    return res.json()
}

const Header = () => {
    var options 
    return <Async promiseFn={loadPageHeader}>
        <Async.Pending>
            <UseHeaderLoading>
                <h1>Loading Data</h1>
            </UseHeaderLoading>
        </Async.Pending>
        <Async.Rejected>
            <UseHeaderError>
                <h1>There was an error loading page header - header data failed</h1>
            </UseHeaderError>
        </Async.Rejected>
        <Async.Fulfilled>
            { data => {
                options = data[0].acf
                return (
                    <header>
                        <UseHeaderStyles>
                            <YoutubeVideoBackground title="LAS BIBAS FROM VIZCAYA" videoId={options.home_page_video} scrollAnchor="#content" />
                            <div className="menu">
                                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <polygon className='small' points="5,7 150,7 150,90 25,90" style={{fill:'url(#menu-fill-small)'}} />
                                    <polygon className='medium' points="25,7 150,7 150,90 37,90" style="fill:url(#menu-fill-medium)" />
                                    <polygon className='large' points="35,7 150,7 150,90 55,90" style="fill:url(#menu-fill-large)" />
                                    <image className="lasbibas" href="https://lasbibas.uxdir.com/files/menu-pose-isolation.png" />
                                    <defs>
                                        <linearGradient id="menu-fill-small" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style="stop-color:rgb(210,151,82);stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:rgb(46,20,7);stop-opacity:0" />
                                        </linearGradient>
                                        <linearGradient id="menu-fill-medium" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style="stop-color:rgb(210,151,82);stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:rgb(46,20,7);stop-opacity:1" />
                                        </linearGradient>
                                        <linearGradient id="menu-fill-large" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style="stop-color:rgb(210,151,82);stop-opacity:0.7" />
                                            <stop offset="93%" style="stop-color:rgb(46,20,7);stop-opacity:0.7" />
                                            <stop offset="94%" style="stop-color:red;" />
                                            <stop offset="95%" style="stop-color:orange;" />
                                            <stop offset="96%" style="stop-color:yellow;" />
                                            <stop offset="97.5%" style="stop-color:green;" />
                                            <stop offset="98%" style="stop-color:blue;" />
                                            <stop offset="99%" style="stop-color:indigo;" />
                                            <stop offset="100%" style="stop-color:violet;" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <ul className='menu-items'>
                                    <li>
                                        <a href="">About</a>
                                    </li>
                                    <li>
                                        <a href="">Contact</a>
                                    </li>
                                    <li>&nbsp;</li>
                                    <li>
                                        <a href="">Youtube</a>
                                    </li>
                                    <li>
                                        <a href="">Spotify</a>
                                    </li>
                                    <li>&nbsp;</li>
                                    <li className='small'>
                                        <a href="">Instagram</a>
                                    </li>
                                    <li className='small'>
                                        <a href="">Twitter</a>
                                    </li>
                                    <li className='small'>
                                        <a href="">Facebook</a>
                                    </li>
                                    <li className='small'>
                                        <a href="">Sound Cloud</a>
                                    </li>
                                </ul>
                            </div>
                            <button className='toggle-menu' onclick="togglemenu('menu')">&#x2630; MENU</button>
                            <button className='arrow-down'></button>
                        </UseHeaderStyles>
                    </header>
            )}}
        </Async.Fulfilled>
    </Async>
}

export default Header

const HeaderContent = () => {
    <></>
}

const UseHeaderLoading = styled.div``

const UseHeaderError = styled.div``

const UseHeaderStyles = styled.div`
button.toggle-menu {
  position: fixed;
  top: 8px;
  right: 16px;
  outline: none;
  background-color: #00000088;
  border: 1px solid white;
  color: white;
  border-radius: 99px;
  min-width: 120px;
  min-height: 56px;
  cursor: pointer;
  text-shadow: 0 0 5px white;
  font-weight: bold;
  box-shadow: 0 0 6px 1px white, inset 0 0 6px 1px white;
  animation: ${buttonNeon} 1500ms infinite alternate;
  line-height: 0;
  text-shadow: 3px 3px 5px #ffff00dd, -3px -3px 5px #ffffffaa;
}

.menu {
  margin: 0;
  position: fixed;
  left: 100vw;
  right: 0px;
  transition: all 500ms ease-out;
}

.menu-items {
    position: absolute;
    display: flex;
    flex-direction: column;
    color: white;
    left: 25%;
    top: 20%;
    list-style: none;
    margin: 0;
    font-size: 8vw;
    font-weight: bold;

    li {
        a {
            margin: 0;
            padding: 0;
            line-height: 1;
        }
        
        .small {
            font-size: 2.5vw;
            padding: 4px 0px;
        }
    }     

    a {
        text-transform: uppercase;
        color: white;
        text-decoration: none;
        text-shadow: 2px 2px 5px #00000088;
        transition: all 500ms linear;
        &:hover {
        color: navajowhite;
        text-shadow: 3px 3px 5px #000000ff;
        transition: all 500ms linear;
        }
    }
}

.lasbibas {
  height: 100px;
  x: -15px;
}

svg {
  margin: 0;
  width: 100vw;
  height: auto;
  max-height: 95vh;
  min-height: 300px;
  min-width: 320px;
}

polygon.small {
  visibility: visible;
}
polygon.medium {
  visibility: hidden;
}
polygon.large {
  visibility: hidden;
}

@media (min-width: 420px) {
  .lasbibas {
    x: 0;
  }
  polygon.small {
    visibility: hidden;
  }
  polygon.medium {
    visibility: visible;
  }

  .menu-items {
    left: 40%;
  }
}

@media (min-width: 1024px) {
  .lasbibas {
    x: 15;
  }
  polygon.small {
    visibility: hidden;
  }
  polygon.medium {
    visibility: hidden;
  }
  polygon.large {
    visibility: visible;
  }

  .menu-items {
    left: 55%;
    top: 15%;
    font-size: 4em;
  }
}

header {
  width: 100vw;
  height: 100vh;
}

.main-content {
  height: 300vh;
  width: 100vw;
  background-color: #000000;
}

.video-background {
  background: #000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -99;
}
`
const buttonNeon = keyframes`
    0% {
      box-shadow: 0 0 6px 1px white, inset 0 0 6px 1px white;
      text-shadow: 3px 3px 5px #ffff00dd, -3px -3px 5px #ffffffaa;
      color: white;
    }
    5% {
      box-shadow: 0 0 16px 1px black, inset 0 0 16px 1px black;
    }
    7% {
      box-shadow: 0 0 6px 1px yellow, inset 0 0 6px 1px yellow;
      color: black;
    }
    15% {
      box-shadow: 0 0 16px 1px greenyellow, inset 0 0 16px 1px greenyellow;
      color: white;
    }
    18% {
      box-shadow: 0 0 6px 1px yellow, inset 0 0 6px 1px yellow;
    }
    30% {
      box-shadow: 0 0 16px 1px DeepPink, inset 0 0 16px 1px DeepPink;
    }
    50% {
      box-shadow: 0 0 6px 1px white, inset 0 0 6px 1px white;
      text-shadow: 3px 3px 5px #ffff00dd, -3px -3px 5px #ffffffaa;
    }
    100% {
      box-shadow: 0 0 6px 1px white, inset 0 0 6px 1px white;
      text-shadow: 3px 3px 5px #ffff00dd, -3px -3px 5px #ffffffaa;
    }
    `