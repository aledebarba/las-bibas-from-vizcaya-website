export const loadOptions = async (url, name) => {
    let reqHeaders = new Headers();

    let reqOptions = { 
        method: 'GET',
        headers: reqHeaders,
        mode: 'cors',
     };
    let res = await fetch("http://lasbibas-db.uxdir.com/wp-json/wp/v2/pages?slug=%22home-page%22")
    
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
}
