import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { OptionsContext } from "./wordpress";

export const AboutLasBibas = () => {
  const { status, data } = useContext(OptionsContext);
  return (
      <StyledAboutSection>
        <div id='about'></div>
        <div className="text">
            { status === 'ok' && <div className='pt' dangerouslySetInnerHTML={ {__html: data.page_texts[0].pt } } /> }
            { status === 'loading' && <div className='pt'>Carregando ... </div> }
            { status === 'error' && <div className='pt'>Ocorreu um erro na internet e não foi possível carregar essa informação ... </div> }

            { status === 'ok' && <div className='pt' dangerouslySetInnerHTML={ {__html: data.page_texts[0].eng } } /> }
            { status === 'loading' && <div className='pt'>Loading ... </div> }
            { status === 'error' && <div className='pt'>There was an internet error and the data coud not be loaded ... </div>}
        </div>
        <div className="underlay"></div>
        <div className="main-image">
          <div className="logotype"></div>
        </div>
        <div className="overlay"></div>
    </StyledAboutSection>
  );
};


const smoke_anim_overlay  = keyframes`
    0% {
      background-position: left 0vh;
      opacity: 0;
    }
    50% {
      background-position: left -100vh;
      opacity: 0.5;
    }
    100% {
      background-position: left -200vh;
      opacity: 0;
    }
  `

const smoke_anim_underlay  = keyframes`
  0% {
      background-position: left 0vh;
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      background-position: left -200vh;
      opacity: 0;
    }
`

const StyledAboutSection = styled.section`

  width: 100vw;
  max-width: 100vw;
  overflow: hidden;
  height: 100vh;
  background-color: #1c1c73;
  position: relative;

  .text {
    color: #ffffff88;
    font-family: var(--font-secondary);
    font-weight: 400;
    font-size: clamp(16px, 1.7vw, 40px);
    line-height: 1.4;
    letter-spacing: 1.5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: clamp(50%, 60vw, 80%);
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 100;
    div {
      padding: 16px;
      margin: 16px;
      border-radius: 8px;
      background: linear-gradient(#121241aa, #212175aa);
      &:hover { color: coral; }
    }

    strong { color: yellow; }

    /* @media (min-width: 480px) {
      width: 50%;
    }
    @media (min-width: 768px) {
      width: 50%;
      justify-content: center;
      align-items: center;
      font-size: 1.5vw;
      line-height: 1.5;
      div {
        padding: 24px;
      }
    }
    @media (min-width: 980px) {
      div {
        margin-left: 128px;
      }
    }
    @media (min-width: 1400px) {
      div {
        font-size: 32px;
      }
    } */
  }

  .logotype {
    position: absolute;
    right: 0;
    top: 0;
    background: url("https://lasbibas.uxdir.com/files/logo-white-v.svg");
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 20vh;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0.5;
    @media (max-aspect-ratio: 9/16) {
      background-position-y: bottom;
      background-size: 10vh;
    }
  }

  .underlay,
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: url("https://lasbibas.uxdir.com/files/smoke-min.png");
    background-repeat: repeat-y;
    z-index: 1;
  }
  .overlay {
    z-index: 3;
    opacity: 0.3;
    background: url("https://lasbibas.uxdir.com/files/smoke-min-red.png");
    mix-blend-mode: color-dodge;
    animation: ${smoke_anim_overlay} 7s linear infinite;
  }
  .underlay {
    animation: ${smoke_anim_underlay} 15s linear infinite;
    mix-blend-mode: screen;
  }

  .main-image {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("https://lasbibas.uxdir.com/files/about-min.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left top;
    z-index: 2;
    @media (min-width: 480px) {
      background-position: 35vw top;
      background-size: contain;
    }
    @media (min-width: 1080px) {
      background-position: right top;
      background-size: contain;
    }

    @media (min-aspect-ratio: 2/5) {
      background-position-y: bottom;
    }
  }

`
