
import './Cart.css'
const Cart = ({ cart, handleRemoveToCart }) => {
    return (
        <div className="cart-container">
            <h2>On the cart in bottle:{cart.length}</h2>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img}></img> <button onClick={() => handleRemoveToCart(bottle.id)}>Remove</button>
                </div>)
            }
        </div>
    );
};

export default Cart;