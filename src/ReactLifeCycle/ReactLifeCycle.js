import React, { Component } from 'react'

export default class ReactLifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            number: 0
        }
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return null;
    }


    render() {
        console.log('render')
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 10
                    })
                }} >Click me!</button>
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentDidUpdate(preProps, preState) {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}
