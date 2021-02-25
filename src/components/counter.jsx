import React, { Component } from 'react';

class counter extends Component { 
    state={
        value: this.props.counter.value
        }; 
    
        handleincrement=()=>{
            this.setState({value:this.state.value+1});
        }
        handledecrement=()=>{
            this.setState({value:this.state.value-1});
        }

    render() { 
       
        return (    
        <React.Fragment>
            <span className={this.getBadgeMethode()}>{this.diplayCount()}</span><br></br>
            <button onClick={this.handleincrement} type="button" className="btn btn-primary btn-sm m-2">Add</button>
            <button onClick={this.handledecrement} type="button" className="btn btn-secondary btn-sm m-2">Remove</button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} type="button" className="btn btn-danger btn-sm m-2">Delete</button>
            <br></br>
        </React.Fragment>
        )
    }

    getBadgeMethode() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "success";
        return classes;
    };

    diplayCount(){
        const {value}=this.state;
        return value===0?'Zero':value;
    };
}
 
export default counter;