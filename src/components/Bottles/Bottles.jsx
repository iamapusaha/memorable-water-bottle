import { useEffect } from "react";
import { useState } from "react";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    return (
        <div>
            <h1>Total Number Of Bottle: {bottles.length}</h1>
        </div>
    );
};

export default Bottles;