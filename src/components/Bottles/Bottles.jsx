import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLs, getStoredCart } from "../../utilities/localStore";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);
    useEffect(() => {

        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            const saveCart = [];
            for (const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    saveCart.push(bottle);
                }
            }
            // console.log(saveCart);
            setCart(saveCart)
        }
    }, [bottles])

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLs(bottle.id)

    }
    return (
        <div>
            <h1>Total Number Of Bottle: {bottles.length}</h1>

            <Cart cart={cart}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;