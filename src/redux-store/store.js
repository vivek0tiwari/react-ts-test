import {createStore} from '../redux/store'
import { globalReducer } from './reducers'

export const store = createStore(globalReducer)
store.subscribe(()=>{
    console.log('hello')
})
store.dispatch({
    type:'ADD',
    data:{
        id:2,
        name:'megha'
    }
})
store.dispatch({
    type:'ADD',
    data:{
        id:3,
        name:'megha1'
    }
})
store.dispatch({
    type:'REMOVE',
    data:{
        id:2,
        name:'megha1'
    }
})
console.log(store.getState())
