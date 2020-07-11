import React, { Component } from 'react'
import Item from "./Item";

export default class List extends Component {
    showProducts() {
            return this.props.products && this.props.products.map(product => (
            <Item key={product.productId} product={product} onAddOrders={this.props.onAddOrders}
            />))
    }


    render() {
        return (
            <div className='row'>
                {this.showProducts()}
                
            </div>
        );
    }
}
