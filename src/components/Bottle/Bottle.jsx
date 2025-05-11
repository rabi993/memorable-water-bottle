import "./Bottle.css"

const Bottle = ({bottle}) => {
    console.log(bottle);
    const {brand, image, price} = bottle;
    return (
        <div className="bottle">
            <h5>Bottle: {brand}</h5>
            <img src={image} alt="" />
            <p>Price: ${price}</p>
        </div>
    );
};

export default Bottle;