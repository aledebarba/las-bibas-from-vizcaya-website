import React from 'react';
import styled from 'styled-components';

/*
* Use as <YoutubeVideoBackground 
*           title="LAS BIBAS FROM VIZCAYA" 
*           videoId={options.home_page_video} 
*           scrollAnchor="#content"  />
*/
const YoutubeVideoBackground = ({ title, videoId, scrollAnchor }) => { return (
    <StyledVideoBackground>
        <div className="video-background">
            <div className="video-foreground">
                <iframe src={"https://youtube.com/embed/" + videoId + "?mute=1&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=yNPcipztRAY"} frameBorder="0" allowFullScreen title="youtube video background"></iframe>
            </div>
            <div className='video-overlay'></div>
            <div id='vidtop-content'>
                <div className="vid-info">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    </StyledVideoBackground>
)}

export default YoutubeVideoBackground

const StyledVideoBackground = styled.div`

        position: fixed;
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
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        background-color: black;
        opacity: 0.6;
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
    font-size: 10em;
    line-height: 0.8;
    margin-top: 0;
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
