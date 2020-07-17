import React, { Component } from 'react'
import Child from './Child'

export default class DemoProps extends Component {
    render() {
        let product = {
            id: 1,
            name: 'abc',
            price: 100,
            img: 'https://picsum.photos/70/100'
        }
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        {/* <Child
                            tenSP={product.name}
                            giaSP={product.price}
                            idSP={product.id}
                            imgSP={product.img}
                        /> */}
                        <Child sanPham={product} />
                    </div>
                </div>
            </div>
        )
    }
}
