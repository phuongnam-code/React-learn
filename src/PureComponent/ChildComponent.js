import React, { Component, PureComponent } from 'react'

export default class ChildComponent extends PureComponent {

    render() {
        console.log('â')
        return (
            <div>
                <h3>component con:{this.props.user.name}</h3>
                <nav className="nav justify-content-center">
                    <a className="nav-link active" href="#">Active link</a>
                    <a className="nav-link" href="#">Link</a>
                    <a className="nav-link disabled" href="#">Disabled link</a>
                </nav>
            </div>
        )
    }
}
