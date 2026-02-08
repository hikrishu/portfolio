import React, { useEffect } from 'react'

const SEO = ({title, description}) => {
    useEffect(()=>{
        document.title = title
        const metaDesc = document.querySelector('meta[name="description"]')
        if(metaDesc) metaDesc.setAttribute("content", description)

    },[title, description])


  return null;
}

export default SEO
