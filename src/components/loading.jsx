import React from 'react';
import styled, { keyframes } from 'styled-components'
import loadingImage from '../../static/menu-pose.png';

export const Loading = () => {
    return (
        <LoadingScreen>
            <h1>Loading</h1>
            <Content>
                <LoadingTop/>
                <LoadingMiddle/>
                <LoadingBottom/>
            </Content>
        </LoadingScreen>
    )
}

const bgPosition = keyframes`
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(3600deg);
    }
` 

const LoadingScreen = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        text-shadow: 3px 3px 10px black;
    }
`

const Content = styled.div`
    height: 75%;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Loader = styled.div`
    width: 100%;
    height: 33%;
    overflow: hidden;
    background-image: url(${loadingImage});
    background-repeat: no-repeat;
    background-size: 33.333%;
    opacity: 0.5;
    animation: ${bgPosition} ease-in-out infinite alternate;
`
const LoadingTop = styled(Loader)`
    background-position: center top;
    animation-duration: 8s;
`
const LoadingMiddle = styled(Loader)`
    background-position: center center;
    animation-duration: 7s;
    `
const LoadingBottom = styled(Loader)`
    background-position: center bottom;
    animation-duration: 5s;
    `