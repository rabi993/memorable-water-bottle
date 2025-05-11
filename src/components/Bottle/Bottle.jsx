import "./Bottle.css"

const Bottle = ({bottle, handleAddToCart}) => {
    // console.log(bottle);
    const {brand, image, price} = bottle;
    return (
        <div className="bottle">
            <h5>Bottle: {brand}</h5>
            <img src={image} alt="" />
            <p>Price: ${price}</p>
            <button onClick={() =>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;


