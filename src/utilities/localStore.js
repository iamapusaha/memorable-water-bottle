const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
}
const saveCartToLs = (cart) => {
    const cartStringfigied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfigied)
}
const addToLs = id => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLs(cart);
}
export { addToLs, getStoredCart }