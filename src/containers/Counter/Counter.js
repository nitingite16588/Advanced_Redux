import React, { Component } from 'react';
import {connect} from 'react-redux';
import  * as actionCreators from '../../store/actions/index'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
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
        onIncrementCounter:()=>dispatch(actionCreators.increment()), 
        onDecrementCounter:()=>dispatch(actionCreators.decrement()),
        onAddCounter:()=>dispatch(actionCreators.add(10)),
        onSubtractCounter:()=>dispatch(actionCreators.subtract(5)),
        onStoreResult:(result)=>dispatch(actionCreators.storeResult(result)),
        onDeleteResult:(val)=>dispatch(actionCreators.deleteResult(val)),
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps )(Counter); // this will connect   mapStateToProps fn to Counter Component