import React, { Component } from 'react'
import Calculator from './Calculator'
import List from './List'

export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {total: 0, orders: []};
        this.addOrders = this.addOrders.bind(this);
        this.delOrders = this.delOrders.bind(this);
    }

    addOrders(product) {
        let findOrder = this.state.orders.find(order => order.product.productId == product.productId);
        if(findOrder) {findOrder.quantity++;}
        else {this.state.orders.push({product: product, quantity: 1});}
        const total = this.state.total + parseInt(product.unitPrice);
        this.setState({total: total, orders: this.state.orders});
    }

    delOrders(product) {
        let findOrder = this.state.orders.find(order => order.product.productId == product.productId);
        let restOrder = this.state.orders.filter(order => order.product.productId != product.productId);
        const total = this.state.total - (findOrder.quantity * parseInt(findOrder.product.unitPrice));
        this.setState({total: total, orders: restOrder});
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-9'>
                        <List products={this.props.products} onAddOrders={this.addOrders} />
                    </div>
                    <div className='col-md-3'>
                        <Calculator total={this.state.total} orders={this.state.orders} onDelOrders={this.delOrders}/>
                    </div>
                </div>
            </div>
        )
    }
}





