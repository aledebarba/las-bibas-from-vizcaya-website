import React from 'react';
import Async from 'react-async';
import options from './website-config.json'

const loadSinglePost = async({postId}) => {
    const post = await fetch(options.endPoint.posts+'?include[]='+postId)
    if (!post.ok) { 
        console.log('error getting post: ',post.statusText)
        throw new Error(post.statusText) 
    } else {
        let res = post.json()
        console.log(res)
        return res;
    };
}

const SinglePost = ({id}) => (
    <Async promiseFn={loadSinglePost} postId={id}>
        <Async.Pending>Loading post</Async.Pending>
        <Async.Rejected>There was an error loading a Post id={id}</Async.Rejected>
        <Async.Fulfilled>
            { data => { 
                let content = data[0].content.rendered;
                let slug = data[0].slug;
                return(
                    <div className="single-post">
                        <div className='post-content'> 
                            <div className={slug} dangerouslySetInnerHTML={{__html: content}}></div>
                        </div>
                    </div>)
            }}
        </Async.Fulfilled>
    </Async>
)

export default SinglePost