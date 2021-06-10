import options from './website-config.json';

export const loadSiteOptions = async () => {
    let res = await fetch(options.endPoint.siteOptions)
    if (!res.ok) {
        console.log('Error loading data: ', res.statusText)
    }
    if (res.ok) console.log(res.json())
    return res.json()
}

export const loadHomePageContent = async (url, name) => {
    let res = await fetch(options.endPoint.homePageContent)
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
}
