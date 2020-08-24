import React from 'react'
import './Counter.css'

class CounterButtons extends React.Component {
    render(){
        return (
            <div className = "Counter">
                <Counter by = {1}/><br></br>
                <Counter by = {5}/><br></br>
                <Counter by = {10}/>
            </div>
        )
    }
}

class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }

       // this.increment = this.increment.bind(this);
       // this.decrement = this.decrement.bind(this);
    }

    render() {
        return (
            <div className = "Counter">
              <button onClick = {this.increment}>+{this.props.by}</button>
              <span>{this.state.counter}</span>
            </div>
        );
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + this.props.by
        });
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - this.props.by
        });
    }
}

export default CounterButtons;