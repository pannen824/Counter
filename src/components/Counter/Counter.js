import React from 'react'
import './Counter.css'

class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    render(){
        return (
            <div className = "Counter">
                    <CounterButtons by = {1} incrementMethod = {this.increment} decrementMethod = {this.decrement}/><br></br>
                    <CounterButtons by = {5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/><br></br>
                    <CounterButtons by = {10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/><br></br>
                    <span>{this.state.counter}</span>
                    <div>
                        <br></br><button className = "reset" onClick = {this.reset} >Reset</button>
                    </div>
            </div>
        )
    }

    increment = (by) => {
        this.setState(
          () =>  {
             return {counter: this.state.counter + by}
            });
    }

    decrement = (by) => {
        this.setState(() => {
            return {counter: this.state.counter - by}
        })
    }

    reset = (by) => {
        this.setState(() => {
            return {counter: this.state.counter * 0}
        });
    }
}

class CounterButtons extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className = "Counter">
                <button onClick = {() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick = {() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        );
    }

    reset = () => {
        this.setState({
            counter: this.state.counter * 0
        })
        this.props.resetMethod(this.props.by);
    }
}

export default Counter;