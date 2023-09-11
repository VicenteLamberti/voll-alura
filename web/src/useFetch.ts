import { useEffect, useState } from "react";

export default function useFetch<T>({url} : {url: string}){
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState('');

    useEffect(()=>{
        fetch(`http://localhost:8080/${url}`)
        .then(resp => resp.json())
        .then(respData=>setData(respData))
        .catch((error=>setError(error)))    
    },[url])
    return {data, error}
}