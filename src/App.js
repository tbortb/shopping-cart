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
      cartItemsList: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ],
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      nextid: 4
    };
  }

  addItemToList = newProduct => {
    const newListEntry = {};
    newListEntry.id = this.state.nextid;
    newListEntry.product = this.state.products.find(p => p.id == newProduct.productId);
    newListEntry.quantity = newProduct.quantity;

    this.setState(prevState => ({
      cartItemsList: [...prevState.cartItemsList, newListEntry],
      nextid: prevState.nextid + 1
    }));
  }

  render = () => {
    return (
      <div>
        <CartHeader />
        <CartItems items={this.state.cartItemsList} />
        
        <AddItem products={this.state.products} submitFunc={this.addItemToList} />
        <CartFooter copyright="2021" />
      </div>
    );
  }
}

export default App;
