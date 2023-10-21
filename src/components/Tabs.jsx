import React, {useState} from 'react'
import '../App.css'
export const Tabs = (props)=>{
    const {tabConfig, onTabClick, currentIndex} = props
    const onClick = (tab, index)=>{
        onTabClick && onTabClick(tab, index)
    }

    const renderHeaders = () =>{
        const tabs = tabConfig.map((tab, index)=>{
            const {tabId, tabHeaderRendrer} = tab
            const Comp = tabHeaderRendrer && tabHeaderRendrer(tab)
            return <div className={index !== currentIndex?'tabHeaderItem': 'tabHeaderItemActive'} onClick={()=>onClick(tab, index)} key={tabId}>
                {Comp}</div>
            // return <div className='tabHeaderItem' onClick={()=>onClick(tab)}>{Comp}<div/>
            })
       return tabs
    }
    const renderContent = () =>{
        const selectedTab = tabConfig[currentIndex]
        return selectedTab && selectedTab.contentRenderer && selectedTab.contentRenderer()
    }
    return (<><div className='tabHeaderContainer'>
        {renderHeaders()}
        </div>
        {renderContent()}</>)
}