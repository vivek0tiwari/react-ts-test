export const globalReducer = (state=[], action) =>{
    const {type, data} = action
    switch(type){
        case 'ADD':
            return [...state, {data}]
        case 'REMOVE':
            return state.filter((item)=>item.id!==data.id)
        default:
            return state
    }
}