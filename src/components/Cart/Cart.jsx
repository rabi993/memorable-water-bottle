

import "./Cart.css"
const Cart = ({cart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cart_container">
                {
                    cart.map(Bottle => <img src={Bottle.image}></img>)
                }
            </div>
        </div>
    );
};

export default Cart;
