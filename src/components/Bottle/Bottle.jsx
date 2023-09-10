import './Bottle.css'
const Bottle = ({ bottle }) => {
    const { name, price, img } = bottle;
    return (
        <div className="bottle">
            <h2>{name}</h2>
            <img src={img} alt="" />
            <p>price: ${price}</p>
        </div>
    );
};

export default Bottle;