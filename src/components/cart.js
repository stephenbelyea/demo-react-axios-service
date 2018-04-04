import React, { Component } from 'react';
import autoBind from 'react-autobind';
import CartService from '../services/cart-service';

class Cart extends Component {
  constructor() {
    super();
    autoBind(this);
    this.state = {
      cart: null,
      error: ''
    }
  }

  componentDidMount() {
    if (this.props.cartId) {
      CartService
        .getCart(this.props.cartId)
        .then((cart) => {
          this.setState({ cart });
        })
        .catch((error) => {
          this.setState({ error });
        });
    }
  }

  handleCreateCart() {
    CartService
      .createCart()
      .then((cart) => {
        this.setState({ cart });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { error, cart } = this.state;
    return (
      <div className="cart">
        { error && <p>Error! {error}</p> }
        { cart ? 
          {/* Render your cart */} 
          :
          <button onClick={this.handleCreateCart}>
            Create a Cart!
          </button>
        }
      </div>
    )
  }
}