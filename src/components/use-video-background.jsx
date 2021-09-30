import React from 'react';
import styled from 'styled-components'

export const UseVideoBackground = ({ webm, mp4, m4v, ogg, children }) => {
    return (
        <StyledVideoContainer>
            <video autoPlay muted loop playsInline>
                {!!webm && <source src={webm} type="video/webm" />}
                {!!mp4 && <source src={mp4} type="video/mp4" />}
                {!!ogg && <source src={ogg} type="video/ogg" />}
                {!!m4v && <source src={m4v} type="video/m4v" />}
                Your browser does not support the video tag.
            </video>
            <div className='overlay'/>
            {children}
        </StyledVideoContainer>
    );
};

const StyledVideoContainer = styled.div`
    .overlay {
        background-image: linear-gradient(black 0%, transparent 25%, transparent 75%, black 100%);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
    video {
    position: absolute;
    width: auto;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: -1;
    }
`;