import React from 'react';

export default class Item extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {productName, unitPrice, thumbnail} = this.props.product;
        return (
            <div className='col-md-3 col-sm-6'>
                <img className='img-fluid img-thumnail' src={thumbnail} />
                <h6 className='mt-2'>{productName}</h6> 
                <p className='title text-right'>{unitPrice} THB</p>
                <button className='btn btn-block btn-secondary title' 
                onClick={() => this.props.onAddOrders(this.props.product)}>Buy</button> 
                <br />
            </div>
        )
    }
}