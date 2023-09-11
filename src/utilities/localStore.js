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
const removeFromLs = id => {
    const cart = getStoredCart();
    const remaning = cart.filter(idx => idx !== id);
    saveCartToLs(remaning)
}
export { addToLs, getStoredCart, removeFromLs }