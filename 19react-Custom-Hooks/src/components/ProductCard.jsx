
const ProductCard = ({title, imageURL, price, id}) => {
    return (
        <>
        <div  className="container">
            <img src={imageURL} alt={title} />
            <p>{title}</p>
            <p>{price}$</p>
        </div>
        </>
    )
}

export default ProductCard;