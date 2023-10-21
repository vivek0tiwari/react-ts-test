
export function createStore(reducer, initialState){
    const store = {}
    store.listners = []
    store.state = initialState
    function getState() {
        return store.state
    }
    function subscribe(listner){
        store.listners.push(listner)
    }
    function dispatch(action){
         state = reducer(state, action)
        for(let i=0;i<listners.length;i++){
            store.listners[i]()
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
