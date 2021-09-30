import React, { createContext, useState, useEffect } from 'react';
import options from './website-config.json'; // end points reference

// Asynchronously get data from endpoint and creates
// custom context, providing data and status
export const OptionsContext = createContext({})
export const OptionsProvider = ( { children } ) => {

    const [ wordpress, setData ] = useState({
        status: 'loading',
        data:{
            message: {
                pt: 'Carregando dados...',
                en: 'Loading data...'
            }
        }
    });

    useEffect(()=>{
        async function getData() {
            const res = await fetch(options.endPoint.homePageContent);
            if (res.ok) {
                const wpData = await res.json();
                setData( {
                    status: 'ok',
                    data: wpData[0].acf
                })
            }
            else {
                console.error('error getting data')
                setData({
                    status: 'error', 
                    data: {
                        message: {
                            en: 'There was an network error getting data.',
                            pt: 'Houve um erro na rede ao obter dados do servidor.'
                        }
                    }})
            }
        }
        getData();
    },[])

    return (
        <OptionsContext.Provider value={ wordpress }>
            {children}
        </OptionsContext.Provider>
    )
}



// Asynchronously get data from endpoint and creates
// custom context, providing data and status
export const WordpressContext = createContext({})
export const WordpressProvider = ({children}) => {

    const [ wordpress, setData ] = useState({
        status: 'loading',
        data:{
            message: {
                pt: 'Carregando dados...',
                en: 'Loading data...'
            }
        }
    });

    useEffect(()=>{
        async function getData() {
            const res = await fetch(options.endPoint.siteOptions);
            if (res.ok) {
                const wpData = await res.json();
                setData( {
                    status: 'ok',
                    data: wpData.acf
                })
                console.log('site options data: ',wpData)
            }
            else {
                console.log('error getting data')
                setData({
                    status: 'error', 
                    data: {
                        message: {
                            en: 'There was an network error getting data.',
                            pt: 'Houve um erro na rede ao obter dados do servidor.'
                        }
                    }})
            }
        }
        getData();
    },[])

    return (
        <WordpressContext.Provider value={ wordpress }>
            {children}
        </WordpressContext.Provider>
    )
}