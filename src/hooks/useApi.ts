import { useEffect, useState } from 'react';
import { fetchData } from '../data';
export interface RequestObject{
    url: string
    method: 'GET'|'POST'
    body: any
}
export const useAPI = (request: RequestObject | null)=>{
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(()=>{
        const getData = async () => {
            let fileData
            if(request && request.url){
                const data = await fetch(request.url);
                fileData  = await data.json()
            }else{
                fileData = await fetchData()
            }
            setData(fileData);
            setLoading(false)
          };
        setLoading(true)
        getData()
    },[])

    return {
        data,
        loading
    }
}