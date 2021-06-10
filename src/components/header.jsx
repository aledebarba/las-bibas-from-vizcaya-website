import React from 'react'
import { Async } from 'react-async';
import options from './website-config.json'

const loadPageHeader = async() => {
    const res = await fetch(options.endPoint.homePageContent)
    if (!res.ok) {
        console.log(res.statusText)
        throw new Error(res.statusText)
    }
    return res.json()
}

const Header = () => {
    var options 
    return <Async promiseFn={loadPageHeader}>
        <Async.Pending>Loading Header Data .... </Async.Pending>
        <Async.Rejected>There was an error loading page header - header data failed</Async.Rejected>
        <Async.Fulfilled>
            { data => {
                options = data[0].acf
                return (
                <header>
                    <div style={{position: "relative", zIndex: -99, width: "100%", height: "640px"}}>
                        <iframe frameBorder="0" height="100%" width="100%" title="Home Page Video"
                            src={"https://youtube.com/embed/"+options.home_page_video+"?autoplay=1&controls=0&showinfo=0&autohide=1&loop=1&playlist="+options.home_page_video}>
                         </iframe>
                    </div>
                </header>
            )}}
        </Async.Fulfilled>
    </Async>
}

export default Header