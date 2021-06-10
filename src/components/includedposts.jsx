import React from 'react'
import { Async } from 'react-async';
import options from './website-config.json'
import SinglePost from './singlepost'

const loadPageHeader = async() => {
    const res = await fetch(options.endPoint.homePageContent)
    if (!res.ok) {
        console.log(res.statusText)
        throw new Error(res.statusText)
    }
    return res.json()
}

const loadIncludedPosts = async() => {
    const options = await loadPageHeader();
    if (options) {
        let data = options[0].acf.include_posts  
        return data    
     } else { 
         console.log ('erro carregando posts')
         }
}

const IncludedPosts = () => {
    return <Async promiseFn={loadIncludedPosts}>
        <Async.Pending>Loading Header Data .... </Async.Pending>
        <Async.Rejected>There was an error loading page header - header data failed</Async.Rejected>
        <Async.Fulfilled>
            { data =>
                data.map( post => (<SinglePost id={post} />) )
            }
        </Async.Fulfilled>
    </Async>
}

export default IncludedPosts