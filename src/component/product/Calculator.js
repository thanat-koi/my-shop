import React, { Component } from 'react'


export default class Calculator extends Component {
    showOrders(orders) {
        if(!orders || orders.length == 0) {
            return <li className='text-right text-muted titile'>Without Product</li>
        } else {
            return orders.map(order => {
                return(
                    <li className='text-right text-success title'>
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice} * {order.quantity}
                        <button className='btn btn-light btn-sm' onClick={() => this.props.onDelOrders(order.product)}> X </button>
                    </li>
                )
            })
        }
    }

    render() {
        const {total, orders} = this.props;
        return (
            <div>
                <h1 className='text-right'>{total}</h1>
                <hr />
                <ul className='list-unstyled'>
                    {this.showOrders(orders)}
                </ul>
                <hr />
                <button className='btn btn-block btn-danger title'>Confirm</button>
                <button className='btn btn-block btn-secondary title'>Cancle</button>
            </div>
        )
    }
}
