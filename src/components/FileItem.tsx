import React, { MouseEventHandler } from 'react'
import { useState } from 'react'
import {FileProps} from './Types'
import {FileItemList} from './FileItemList'
import './FileList.css'
const BULLET_STYLE = {
    'DOT': "*",
    'expanded':'^',
    'contracted':'>'
}
export const FileItem = (props: FileProps)=>{
    const [selected, setSelected] = useState<boolean>(false)
    const {id, name, children} = props
    const onClick = (e: any)=>{
        e.stopPropagation()
        setSelected(!selected)
    }
    return <li
            onClick={onClick}
            className='listItem'>
        <span>{children?.length ? BULLET_STYLE.contracted: BULLET_STYLE.DOT}</span>
        <span>{name}</span>
        {children?.length && selected && <FileItemList data={children} key={id}/>}
        </li>
}

