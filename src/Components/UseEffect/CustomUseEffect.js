import React,{useState, useEffect} from 'react'


export default function CustomUseEffect(url) {
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then((response) => {
                if(!response.ok){
                    throw Error("Data hasn't Loaded");
                }
                setIsLoading(true)
                return response.json()
            })
            .then((json) =>  {
                setData(json)
            })
            .catch((error)=>{
                setError(error.message)
                setIsLoading(false)
            })
        },1000)
    },[])
    console.log(data)

  return {data, isLoading, error}
}
