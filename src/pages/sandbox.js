import React from 'react';
import { Feeds, Feed } from '../components/feeds'


const Sandbox = () => {
    return (
        <Feeds>
            <Feed type='spotify' />            
            <Feed type='youtube' />
        </Feeds>
    )
}
export default Sandbox 
