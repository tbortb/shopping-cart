import './App.css';
import CartFooter from './CartFooter';
import CartHeader from './CartHeader';
import CartItems from './CartItems';
import AddItem from './AddItem';
import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartItemsList: [],
      products: []
    };
  }

  async componentDidMount() {
    const cartResp = await fetch("http://localhost:8082/api/items");
    const cartItemsList = await cartResp.json();
    const productsResp = await fetch("http://localhost:8082/api/products");
    const products = await productsResp.json();
    this.setState(prevState => ({ cartItemsList, products }));
  }


  addItemToList = newProduct => {
    const postItem = {};
    postItem.id = this.state.cartItemsList.reduce((max, current) => current.id > max ? current.id : max, 0) + 1;
    postItem.product_id = parseInt(newProduct.productId);
    postItem.quantity = parseInt(newProduct.quantity);
    this.postItem(postItem).then(newListEntry => this.setState(prevState => ({
      cartItemsList: [...prevState.cartItemsList, newListEntry]
    })));
    
  }

  async postItem(item) {
    const response = await fetch('http://localhost:8082/api/items', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    return await response.json();
  }

  render = () => {
    return (
      <div>
        <CartHeader />
        <CartItems items={this.state.cartItemsList.map(cartItem => ({
          id: cartItem.id,
          product: this.state.products.find(p => p.id === cartItem.product_id),
          quantity: cartItem.quantity
        }))} />

        <AddItem products={this.state.products} submitFunc={this.addItemToList} />
        <CartFooter copyright="2021" />
      </div>
    );
  }
}

export default App;
