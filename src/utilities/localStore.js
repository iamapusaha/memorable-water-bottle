const getStoredCart = () => {
    const StoredCartString = localStorage.getItem('cart');
    if (StoredCartString) {
        return JSON.parse(StoredCartString)
    }
    return [];
}
const saveCartToLs = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}
const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id)
}