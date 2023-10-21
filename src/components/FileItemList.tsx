import React from 'react'
import { FileItem } from './FileItem'
import {FileListProps, FileProps} from './Types'

export const FileItemList = (props: FileListProps)=>{
    const {data=[]} = props

    return <>{
        data && data.map((file:FileProps)=>{
            const {id, children, name} = file
            return <ul><FileItem id={id} children={children} name={name} key={id} isExpanded={false}/></ul>
        })
    }</>
}

