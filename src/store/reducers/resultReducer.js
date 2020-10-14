import * as actionTypes from '../actions';
const intialState = {

    result:[]
}
const resultReducer = (state = intialState, action) => {
    switch (action.type) {

        case (actionTypes.STORE_RESULT):
            return {
                ...state,
                result: state.result.concat( {id:new Date() ,val:action.result})
            }
        
        case (actionTypes.DELETE_RESULT):
            return {
                ...state,
                result : state.result.filter(item=>item.id!==action.id)
                
            }


    }
    return state;
}

export default resultReducer;