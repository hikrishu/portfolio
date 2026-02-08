import { useState, useEffect } from "react"



export const useProjects = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

     useEffect(()=> {
        const timer = setTimeout(()=> {
          const shouldFail = false    //change into true to cause error

          if(shouldFail){
            setError(true)
          }

          setLoading(false)
        }, 800)
    
        return ()=> clearTimeout(timer)   // means can't change state on component unmount
      }, [])    // runs just once in mount of components... only on first render/page load....not in re render or state change
    
    return {loading, error}
}