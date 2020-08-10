import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class PureComponentDemo extends Component {

    state = {
        number: 1000,
        user: { id: 1, name: 'tèo' }
    }

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1000
                    })
                }}>Click me!!</button>
                <button onClick={() => {
                    let newUser = this.state.user;
                    newUser.name = 'tí'
                    this.setState({
                        user: { ...newUser }
                    })
                }}>Set name</button>
                <h4>component cha: {this.state.user.name}</h4>
                <ChildComponent user={this.state.user} />
            </div>
        )
    }
}
