import React, { useEffect } from 'react'

const api = () => {
    let api = "http://hn.algolia.com/api/v1/search?query=html";

    const fetchApiData = async (url) => {
        try{
            const res = fetch(url);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
      fetchApiData(api);
    }, [])
    
  return (
    <div>
        <h2>Tech News Post</h2>
    </div>
  )
}

export default api;