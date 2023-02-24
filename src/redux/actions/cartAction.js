export const addToCart = (pizza, quantity, varient) => {
  var cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient: varient,
    quantity: quantity,
    prices: pizza.prices,
    price: pizza.price[0][varient] * quantity,
  };
  dispatchEvent({ type: "ADD_TO_CART", payload: cartItem });
};
