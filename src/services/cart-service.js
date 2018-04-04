import autoBind from 'react-autobind';
import BaseService from './base-service';

class CartService extends BaseService {
  constructor() {
    super();
    autoBind(this);
  }

  createCart() {
    return this
      .post(`/cart`)
      .catch(this.handleError);
  }

  getCart(cartId) {
    return this
      .get(`/cart/${cartId}`)
      .catch(this.handleError);
  }

  addCartItem(cartId, itemObj) {
    return this
      .put(`/cart/${cartId}`, itemObj)
      .catch(this.handleError);
  }
}

export default CartService;