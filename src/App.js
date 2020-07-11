import React from 'react';
import './App.css';
import {Footer} from './component/Footer'
import Header from './component/Header'
import Item from './component/product/Item'
import Display from './component/product/Display'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: ""}
  }
  componentDidMount() {
    this.setState({products: [
      { productId: 1, productName: "Salad", unitPrice: "119", thumbnail: "/images/product/1.jpg" },
      { productId: 2, productName: "Fried Chicken", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
      { productId: 3, productName: "Bingsu", unitPrice: "170", thumbnail: "/images/product/3.jpg" },
      { productId: 4, productName: "French Fried", unitPrice: "120", thumbnail: "/images/product/4.jpg" },
      { productId: 5, productName: "Cake", unitPrice: "99", thumbnail: "/images/product/5.jpg" },
      { productId: 6, productName: "Coffee", unitPrice: "89", thumbnail: "/images/product/6.jpg" }
    ]})

  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <Header />
      <Display products={this.state.products} />
      <Footer company='React' email='t.intharasoon@gmail.com' />
      </header>
    </div>
    )
  }
}



