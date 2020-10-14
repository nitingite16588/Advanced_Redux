import React, { Component } from 'react';
import {connect} from 'react-redux';
import  * as actionTypes from '../../store/actions'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement"  clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5"  clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5"  clicked={this.props.onSubtractCounter}  />
                <button onClick={this.props.onStoreResult.bind(this,this.props.ctr)}>Store</button>
                <ul> {this.props.result.map(item=>{
                     return (<li onClick={this.props.onDeleteResult.bind(this,item.id)}>{item.val}</li>)
                })}
                    
                </ul>
            </div>
        );
    } 
}


const mapStateToProps=(state)=>{ //like subscription
    return {
        ctr:state.ctr.counter,
        result:state.res.result    
    }
}
const mapDispatchToProps=(dispatch)=>{ // like dispatch
    return {
        onIncrementCounter:()=>dispatch({type:actionTypes.INCREMENT}), 
        onDecrementCounter:()=>dispatch({type:actionTypes.DECREMENT}),
        onAddCounter:()=>dispatch({type:actionTypes.ADD,val:10}),
        onSubtractCounter:()=>dispatch({type:actionTypes.SUBTRACT,val:5}),
        onStoreResult:(result)=>dispatch({type:actionTypes.STORE_RESULT,result:result}),
        onDeleteResult:(val)=>dispatch({type:actionTypes.DELETE_RESULT,id:val}),
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps )(Counter); // this will connect   mapStateToProps fn to Counter Component