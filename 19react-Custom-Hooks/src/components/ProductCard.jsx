
const ProductCard = ({ title, imageURL, price, id }) => {
    return (
        <>
            <div className="container">
                <img src={imageURL} alt={title} />
                <p>{title}</p>
                <p className="price">{price}$</p>
                <div className="btns">
                    <button className="btn1">Buy</button>
                    <button className="btn2">Add To Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard;