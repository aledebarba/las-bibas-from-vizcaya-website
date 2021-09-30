import React, { useContext } from 'react'
import styled from 'styled-components'
import { Loading } from './loading'
import { YoutubeVideoBackground } from './youtube-components';
import { WordpressContext } from './wordpress';

const Header = () => {
    const { data, status } = useContext(WordpressContext)
    
    if (status === 'loading') return <Loading></Loading>
    if (status === 'error') {
        return <>
            <StyledHeader>
                <h1>
                    {data.message.pt}<br/>
                    {data.message.en}
                </h1>
            </StyledHeader>
        </>
    }
    
    if (status === 'ok') { 
        return <>
            <StyledHeader>
                <YoutubeVideoBackground
                    title="LAS BIBAS FROM VIZCAYA"
                    videoId={data.home_page_video}
                    scrollAnchor='#content'
                    overlayGrid={true}
                />
            </StyledHeader>
        </>
    }
}
export default Header

const StyledHeader = styled.header`
  display: block;
  width: 100vw;
  height: 100vh;
`