import React , { Component} from 'react';
class Counter extends Component { 
    state = {
        Count: 0
    };
    render(){
        return (<div className="heading">
            <h1 >Number Game</h1>
        </div>
        );
    }
    
} 
export default Counter;