import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import HambugerMenu from "../components/hamburgermenu"

const IndexPage = () => (
  <main>
    <HambugerMenu />
    {/* <Header /> */}
    <SpotifyFeed />
    <YoutubeFeed />
    <LogoReveal />
    <AboutLasBibas />
    <ImageSlideShow />
    <ImageGallery />
    <ContactForm />
    <Footer />
  </main>
)
export default IndexPage

const SpotifyFeed = () => <></>
const YoutubeFeed = () => <></>
const LogoReveal = () => <></>
const AboutLasBibas = () => <></>
const ImageSlideShow = () => <></>
const ImageGallery = () => <></>
const ContactForm = () => <></>