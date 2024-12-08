import { useEffect, useState } from "react"

const useUserFetch = (url)=>{

    const [ data, setData] =  useState([])

    useEffect(()=>{
        fetch(url).then((response)=>{
            response.json().then((result)=>{
                setData(result)
            })
        })
    },[])
    return data
}
export default useUserFetch