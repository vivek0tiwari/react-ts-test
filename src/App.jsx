import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import {store} from './redux-store/store'
import {Tabs} from './components/Tabs'
import './jstest'
import { SearchBox } from './SearchBox';
const TabConfig = [{
  tabId:'1',
  contentRenderer: ()=>{
    return <div>FirstTab</div>
  },
  tabHeaderRendrer:()=>{
    return <div >Frist Header</div>
  }
},
{
  tabId:'2',
  contentRenderer: ()=>{
    return <div>SecondTab</div>
  },
  tabHeaderRendrer:()=>{
    return <div >Second Header</div>
  }
}]


// console.log(store)
function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const onTabClick = (tab: any, tabIndex: number)=>{
    setCurrentIndex(tabIndex)
  }
  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Tabs tabConfig={
            TabConfig
          }
          onTabClick={onTabClick}
          currentIndex={currentIndex}></Tabs>
      </header> */}
      {/* <div className='headerBox'></div>
      <div className='imageBG'>
        <div className='imageHeaderWrapper'>Chasing The Phantom</div>
        <div className="secongFold"> Chasing The Phantom Chasing The PhantomChasing The PhantomChasing The PhantomChasing The PhantomChasing The PhantomChasing The PhantomChasing The PhantomChasing The PhantomChasing The PhantomChasing The Phantom</div>
      </div> */}
      <SearchBox delay={3000} onChange={console.log}/>
      <SearchBox onChange={console.log}/>
    </div>
  );
}

export default App;
