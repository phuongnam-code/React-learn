import React, { Component } from 'react'

export default class EventBinding extends Component {

    handleClick = () => {
        alert('hello Phương Nam');
    }

    showMessage = (mes) => {
        alert('hello ' + mes);
    }

    render() {
        return (
            <div>
                <h1 >Event Binding Component</h1>
                {/* có 2 cách: cách 1. truyền trực tiếp callback function  */}
                <p >cách 1</p>
                <button onClick={this.handleClick}>Click me 1!!</button>
                <button onClick={this.showMessage.bind(this, 'Nam')}>Click me 1!!</button>
                {/* cách 2. truyền function gián tiếp */}
                <p >cách 2</p>
                <button onClick={() => {
                    this.handleClick()
                }}>Click me 2!!</button>

                <p>show message</p>
                <button onClick={() => {
                    this.showMessage('Nam')
                }}>show message!!</button>
            </div>
        )
    }
}
