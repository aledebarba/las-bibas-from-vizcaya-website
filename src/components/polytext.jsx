import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components'
import { UseVideoBackground } from './use-video-background';
import { OptionsContext } from './wordpress';

export const PolyText = ({ children }) => {
    
  const { status, data } = useContext(OptionsContext)

    return (
        <StyledPolyTextSection>
            <UseVideoBackground 
                webm="https://lasbibas.uxdir.com/files/diamongsbg.webm"
                mp4="https://lasbibas.uxdir.com/files/diamongsbg.mp4" >
            </UseVideoBackground>
            <h1>ABOUT<br/>LAS BIBAS</h1>
            { status === 'ok' && <> 
              <StyledTexts>
                <div className='about__pt' 
                    dangerouslySetInnerHTML={ {__html: data.page_texts[0].pt } }
                />
                <div className='about__eng' 
                    dangerouslySetInnerHTML={ {__html: data.page_texts[0].eng } }
                />
                
              </StyledTexts>
            </>}
        </StyledPolyTextSection>
    );
  };

  const StyledPolyTextSection = styled.section`
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: 10;

    h1 {
        font-size: 8em;
        line-height: 0.8;
        margin: 128px auto 16px 64px;
        width: 50%;
        padding: 0;
    }

  ` 
  const rainbowColors = keyframes`
    0% { color: white; }
    25% { color: pink; }
    75% { color: coral; }
    100% { color: white; }
  `;

  const StyledTexts = styled.div`
    --animations: all 500ms ease-out;
    --expandedFontSize: 2em;
    --reducedFontSize: 1em;
    --expandedSize: 90%;
    --reducedSize: 10%;
    --expandedFont: "Calistoga";
    --reducedFont: "Poppins";
    --globalPad: 32px;
    --globalMargin: 32px;
    --reducedPad: 8px;
    --reducedMargin: 8px;
    --expandedLineHeight: 2.4;
    --reducedLineHeight: 1.8;
    --reducedColor: #ffffff88;
    --expandedColor: gold;
  
    display: flex;
    width: 100%;
   
  
    div {
      width: 50%;
      color: var(--reducedColor);
      padding: var(--globalPad);
      margin: var(--globalMargin);
      font-family: var(--reducedFont);
      flex: 0 0 1;
      line-height: var(--reducedLineHeight);
      transition: var(--animations);
  
      strong {
        color: white;
        animation: ${rainbowColors} 3s linear infinite alternate;
      }
  
      &:hover {
        font-family: var(--expandedFont);
        font-size: var(--expandedFontSize);
        color: var(--expandedColor);
        line-height: var(--expandedLineHeight);
        transition: var(--animations);
        width: var(--expandedSize);
        text-shadow: 1px 1px 1px black;
      }
    }
  
  `;
  