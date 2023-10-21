import React,{useCallback, useState} from "react";


const debunce =(fn, delay)=>{
    let inDebounce 
    const context = this
    return function(){
        const args = arguments
        setTimeout(()=>{
                inDebounce = true
                console.log('indebounce', inDebounce)
                if(inDebounce) fn && fn.call(context, ...args)
        },delay)
    }
}

export const SearchBox = ({delay, onChange})=>{
    const [val,setVal] = useState()
    const onChangeWithDebounce = debunce(onChange, delay)
    const _onChange =  useCallback(()=>{
        if(delay){
            setTimeout(()=>{
                onChangeWithDebounce(val)
            })
        }else{
            onChange(val)
        }
    },[delay, onChange])
    
    const _onTextChange = (e)=>{
       setVal
    }
    return <input type='text' value={val} onChange={(e)=>_onTextChange(e)}/>
}