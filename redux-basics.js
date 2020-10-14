
const redux =require('redux');
const createStore= redux.createStore;
const initialState={
    counter:0
}

//reducer , reducer will get defaul state when no state are assign from initialState
const reducer=(state= initialState  ,action)=>{
    if(action.type==='INC_COUNTER'){
        return{
            ...state,
            counter:state.counter+1
        }
    }
    if(action.type==='ADD_COUNTER'){
        return{
            ...state,
            counter:state.counter+action.value
        }
    }
}

//store

const store=createStore(reducer);


store.subscribe(()=>{
    console.log('subscription',store.getState())
})
//dispatch  action 
store.dispatch({type:'INC_COUNTER'})
store.dispatch({type:'ADD_COUNTER',value:10})
//subscription

console.log(store.getState());

 