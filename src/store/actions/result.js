import * as actionTypes from './actionTypes';
export const  saveResult=(value) =>{
    return {
        type:actionTypes.STORE_RESULT,
        result:value
    }
}


export const  storeResult=(value) =>{  //asychronous code
    return dispatch=>{  //this code run due to thunk pacakge imported in index.js as asychronous 
        setTimeout(()=>{
            dispatch(saveResult(value)) 
        },2000)
    }
}

export const  deleteResult=(value) =>{
    return {
        type:actionTypes.DELETE_RESULT,
        id:value
    }
}