import React from 'react';
import { Async } from 'react-async';
import options from './website-config.json'

const loadSiteOptions = async() => {
    const res = await fetch(options.endPoint.siteOptions);
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
}

const Footer = () => {
    return (
    <Async promiseFn={loadSiteOptions}>
        <Async.Pending> Loading Site Options </Async.Pending>
        <Async.Rejected> There was an error loading site options - footer result failed </Async.Rejected>
        <Async.Fulfilled>
            { data => ( 
                <div className="copyright__notes">
                   <div className="pt-br">
                        <span dangerouslySetInnerHTML={{ __html: data.acf.copyright_notice.pt  }}></span>
                        <a href={"mailto:"+data.acf.contact_email}>contato@lasbibas.com</a>
                    </div>
                    <div className="eng">
                        <span dangerouslySetInnerHTML={{ __html: data.acf.copyright_notice.eng  }}></span>
                        <a href={"mailto:"+data.acf.contact_email}>contato@lasbibas.com</a>
                    </div>
                </div>
            )}
        </Async.Fulfilled>
    </Async>
    )
}

export default Footer