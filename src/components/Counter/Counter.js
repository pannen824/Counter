import React from 'react'
import './Counter.css'

class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }

       // this.increment = this.increment.bind(this);
       // this.decrement = this.decrement.bind(this);
    }

    render(){
        return (
            <div className = "Counter">
                <CounterButtons by = {1} incrementMethod = {this.increment}/><br></br>
                <CounterButtons by = {5} incrementMethod = {this.increment}/><br></br>
                <CounterButtons by = {10} incrementMethod = {this.increment}/><br></br>
                <span>{this.state.counter}</span>
            </div>
        )
    }

    increment = (by) => {
        this.setState({
            counter: this.state.counter + this.by
        });
        this.incrementMethod(this.by);
    }
}

class CounterButtons extends React.Component {

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
            </div>
        );
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + this.props.by
        });
        this.incrementMethod(this.props.by);
    }
}

export default Counter;