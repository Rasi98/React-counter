import React, { Component } from 'react';
import Counter from './counter';

class counters extends Component {
    state = {  
        counters:[
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
    };

    handleDelete=counterId=>{
        const cnt=this.state.counters.filter(c=>c.id!==counterId);
        this.setState({counters:cnt});
    };

    render() { 
        return ( 
        <div>
           {this.state.counters.map((counter)=>
           <Counter key={counter.id} counter={counter} onDelete={this.handleDelete}/>
           )}
        </div>
         );
    }
}
 
export default counters;