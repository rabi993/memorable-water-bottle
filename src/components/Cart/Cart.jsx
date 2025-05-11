import PropTypes from 'prop-types';

import "./Cart.css"
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cart_container">
                {
                    cart.map(bottle =>
                        <div key={bottle.id}>
                             <img  src={bottle.image}></img>
                             <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

Cart.PropTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;
