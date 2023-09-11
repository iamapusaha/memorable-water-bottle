/* eslint-disable react/jsx-key */
import './Cart.css'
const Cart = ({ cart }) => {
    return (
        <div className="cart-container">
            <h2>On the cart in bottle:{cart.length}</h2>
            {
                cart.map(bottle => <img src={bottle.img}></img>)
            }
        </div>
    );
};

export default Cart;