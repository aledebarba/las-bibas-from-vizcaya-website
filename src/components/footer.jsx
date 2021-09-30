import React, { useContext } from 'react';
import styled from 'styled-components';
import Image from './Image';
import { WordpressContext } from './wordpress';

const Footer = () => {
    const {status, data} = useContext(WordpressContext)
     return <StyledFooter>
        <FooterInfo>
            <SocialNetworks>
                { 
                
                status === 'ok' && 
                    data.social_networks_links.map( (social, index) => 
                        <div className='social-network__link' key={'snlink'+index}>
                            <a href={social.link} target="_blank" rel="noreferrer">
                                <div className="icon">
                                    <img src={social.icon_content.media_library_image} alt='social network icon' />
                                </div>
                                <p>{social.name}</p>
                            </a>
                        </div>
                    )
                }
            </SocialNetworks>
            <Disclaimer>
                You can obtain more informations, facts and updates about Las Bibas From Vizcaya following her social networks. Make sure to subscribe and share the content. xoxo
            </Disclaimer>
            <HalfTone src='lbfv-halftone.png' alt='las bibas from vizcaya eye detail in paper halftone style'/>
        </FooterInfo>

        <CopyRightText>
            <div className="pt-br">
                { 
                status === 'ok' &&  
                    <>
                        <span dangerouslySetInnerHTML={{ __html: data.copyright_notice.pt  }}></span>
                        <a href={"mailto:"+data.contact_email}>contato@lasbibas.com</a>
                    </>                    
                }
                { 
                status !== 'ok' && 
                    <span>{data.message.pt}</span> 
                }
            </div>
            <div className="eng">
                { status === 'ok' && <>
                    <span dangerouslySetInnerHTML={{ __html: data.copyright_notice.eng  }}></span>
                    <a href={"mailto:"+data.contact_email}>contato@lasbibas.com</a>
                </>
                }
                { status !== 'ok' && <span>{data.message.en}</span> }
            </div>
            <Diamond src='footer-diamond.png' alt='a diamond over black background'/>
        </CopyRightText>
    </StyledFooter> 
}

export default Footer

// styled components

const StyledFooter = styled.footer`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 30vh;
    min-height: 540px;
`
const HalfTone = styled(Image)`
    width: 50%;
    max-width: 600px;
    margin-left: 64px;
`

const Diamond = styled(Image)`
    width: 20%;
    margin: 16px auto;
`
const FooterInfo = styled.div`
    display: flex;
    width: 100vw;
    margin: 0 auto;
    justify-content: center;
    z-index: 1;
`
const CopyRightText = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    font-size: 0.8em;
    line-height: 1.2;
    margin: 64px auto 32px auto;
    opacity: 0.8;
    div { 
        padding: 0 16px;
        margin-bottom: 16px;
        p { display: inline; }
        a { color: yellow; display: inline-block; }
     } 
     z-index: 1;
`
const SocialNetworks = styled.div`
    display: flex;
    width: 10%;
    min-width: 150px;
    flex-direction: column;
    z-index: 1;
    
    div a { 
        display: flex; 
        align-items: center;
        
        div.icon { 
            width: 64px;
            height: 64px;
            margin-bottom: 8px 0 8px 0;
            border-radius: 99px;
            flex-grow: 0;
            flex-shrink: 0;
            transition: all 300ms linear;

            img {
                padding: 4px;
                width: 100%;
            }
        }
        p {
            color: white;
            margin-left: 8px;
            padding: 1px 1px 1px 1px;
            font-family: var(--font-secondary);
            opacity: 0;
            transition: all 100ms linear;
        }

        &:hover p {
            opacity: 1;
            background-color: tomato;
            padding: 4px 16px 4px 16px;
            border-right: 5px solid coral;
            box-shadow: 0 0 5px 2px black;
            transition: all 100ms linear;
        }

        &:hover div.icon {
            background-color: tomato;
            transition: all 300ms linear;
            border-radius: 16px;
        }
    }
`

const Disclaimer = styled.p`
    font-family: var(--font-secondary);
    font-size: 1.3em;
    color: white;
    width: 20%;
    margin: 0;
    padding: 0;
    @media (min-width: 1200px) { font-size: 2em; }
`