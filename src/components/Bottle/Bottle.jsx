import './Bottle.css'
const Bottle = ({ bottle, handleAddToCart }) => {
    const { name, price, img } = bottle;
    return (
        <div className="bottle">
            <h2>{name}</h2>
            <img src={img} alt="" />
            <p>price: ${price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;