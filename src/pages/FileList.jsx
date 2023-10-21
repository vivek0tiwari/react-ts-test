import { useAPI } from '../hooks/useApi'
import {PAGE_HEADER} from './constants'
import {FileItemList} from '../components/FileItemList'

export const FileList = ()=>{
    const {data, loading} = useAPI(null)
    return <>
    <h1>{PAGE_HEADER}</h1>
    {loading ?<div>Loading..</div>:<FileItemList data={data}/>}
    </>
}