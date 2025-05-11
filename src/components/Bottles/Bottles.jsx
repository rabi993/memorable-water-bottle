import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"
import { addToLS, getStoredCart } from "../../utilities/localstorage";
import Cart from "../Cart/cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])


    // load cart from local storage
    useEffect(() => {
        console.log('called the useEffect', bottles.length);
        if(bottles.length>0){
            const storedCart = getStoredCart();
            console.log(storedCart);
            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id ===id);
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            console.log(savedCart);
            setCart(savedCart);
        }
    },[bottles])


    const handleAddToCart = bottle =>{
        console.log('bottle going to be added');
        console.log(bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    return (
        <div>
            <h2>Bottles Available : {bottles.length}</h2>
            <Cart cart={cart}></Cart>
            <div className="bottle_container">
                {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart ={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;