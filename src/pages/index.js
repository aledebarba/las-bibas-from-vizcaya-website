import React from "react"
import styled from 'styled-components'
import Footer from "../components/footer"
import Header from "../components/header"
import { WordpressProvider, OptionsProvider } from '../components/wordpress'
import { HamburgerMenu } from "../components/hamburger-menu"
import { YoutubeFeed } from '../components/youtube-components'
import { TopTenCarousel } from '../components/spotify-cards'
import { Galleries } from '../components/image-galleries'
import { Feeds, Feed } from "../components/feeds"
import { ContactForm } from '../components/contact-form'
import { AboutLasBibas } from '../components/AboutLasBibas'

const IndexPage = () => {

return (
  <main>
    <WordpressProvider>
      <HamburgerMenu />
      <OptionsProvider>
        <Header /> 
      </OptionsProvider>
      <Content>
        <Feeds>
          <Feed type='spotify'>
            <TopTenCarousel />
          </Feed>
          <Feed type='youtube'>
            <YoutubeFeed />
          </Feed>
        </Feeds>
        <OptionsProvider>
          <AboutLasBibas />
        </OptionsProvider>
        <Galleries />
        <ContactForm /> 
        <Footer />
      </Content>
   </WordpressProvider>
  </main>
) 
}
export default IndexPage

const Content = styled.section`
  margin: 0;
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
`

