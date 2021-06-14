import React, { useState } from "react";
import styled from 'styled-components'
import lbfvImage from '../../static/menu-pose-isolation.png';
import lbfvMenuBg from '../../static/menu-bg.svg';

const HambugerMenu = () => {

  const [visible, setVisible] = useState(false);
  var visibility = visible ? 'menu visible' : 'menu hidden';
  var buttonClass = visible ? 'button_close' : 'button_open';
  var backgroundOverlay = visible ? 'bg_overlay_visible' : 'bg_overlay_hidden';

  return (
    <StyledMenu>
      <div className={backgroundOverlay} />
      <div className={visibility}>
        <div className="background">
            <div className="menu-bg" />
            <div className="main-image" />
        </div>
        <div className="menu__options">
          <a href='#about'>About</a>
          <a href='#contact'>Contact</a>
          <br />
          <a href='http://instagram.com' target='_blank' alt='social network link' rel='noreferrer'>Instagram</a>
          <a href='http://facebook.com' target='_blank' alt='social network link' rel='noreferrer'>Facebook</a>
          <a href='http://twitter.com' target='_blank' alt='social network link' rel='noreferrer'>Twitter</a>
          <a href='http://youtube.com' target='_blank' alt='social network link' rel='noreferrer'>Youtube</a>
          <a href='http://spotify.com' target='_blank' alt='social network link' rel='noreferrer'>Spotify</a>
        </div>
      </div>
      <div className="toggler">
        <button className={buttonClass} onClick={() => { setVisible(!visible); }}>
          {!visible && <span>&#x2630; MENU</span>}
          {!!visible && <span>X CLOSE</span>}</button>
      </div>
    </StyledMenu>
  );
};

export default HambugerMenu

const StyledMenu = styled.div`
--menuHeight: 90vh;
--menuWidth: 50vw; 
.menu {
    position: fixed;
    top: 0;
    width: var(--menuWidth);
    height: var(--menuHeight);
    transition: all 0.5s ease;

    .background {
        position: absolute;
        top: 0;
        right: 0;
        width: 50vw;
        height: 100vh;
        border: 3px solid red;
    }

    .main-image {
        position: absolute;
        top: 0;
        left: -35px;
        background-image: url(${lbfvImage});
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        height: 90vh;
        border: 2px solid yellow;
    }

    .menu-bg {
        position: absolute;
        top: 32px;
        left: 0px;
        background-image: url(${lbfvMenuBg});
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 80vh;
        border: 2px solid green;
    }


    .menu__options {
        position: absolute;
        right: 64px;
        top: 160px;
        display: flex;
        flex-direction: column;
        font-size: 3rem;
        a {
            color: white;
            font-weight: bold;

            &:hover {
                
            }
        }
    }
}

.toggler {
    button {
        cursor: pointer;
        position: fixed;
        right: 32px;
        top: 32px;
        width: 128px;
        height: 64px;
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        border: 3px solid white;
        border-radius: 99px;
        box-shadow: 0 0 10px 0px white, 
            inset 0 0 10px 0px white;
    }
}

.button_open {
    background-color: #000000cc;
    transition: all 500ms linear;
}
.button_close {
    background-color: #00000000;
    transition: all 500ms linear;
}

.visible {
    right: 0px;
}

.hidden {
    right: 100vh; }

.bg_overlay_visible {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: black;
    opacity: 0.8;
    transition: all 300ms linear;
}

.bg_overlay_hidden {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: black;
    opacity: 0;
    transition: all 300ms linear;
}
`