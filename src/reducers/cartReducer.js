import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, product, color, amount } = action.payload;

      console.log("l", color);

      // Find product by ID and color
      const tempItem = state.cart.find((item) => item.id === id + color);

      if (tempItem) {
        // Find cartItem in cart and increase the amount -> check stock
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        // Create new cartItem
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }

    default:
      throw new Error(`No matching "${action.type}" - action type`);
  }
};

export default cartReducer;
