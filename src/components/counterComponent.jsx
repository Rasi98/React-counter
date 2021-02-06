import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0
    };

    increment=()=>{
        this.setState({count:this.state.count+1})
    };
    decrement=()=>{
        this.setState({count:this.state.count-1})
    };
  
  
    render() { 
        
        return (
        <React.Fragment>
            <div className="text-center mt-4">
                <h1 className="font-weight-bold">{this.state.count}</h1>
            </div>
            <div className="text-center mt-5">
                <button type="button" class="btn btn-success btn-lg" onClick={this.increment}>Increment</button>
            </div>
            <div className="text-center mt-5">
                <button type="button" class="btn btn-danger btn-lg" onClick={this.decrement}>Decrement</button>
            </div>
        </React.Fragment>
        );

    }
   
} 
 
export default Counter;