import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts'


function ProductList() {
  // use of custom hook
  const { product } = useProducts()

  return (
    <>

      <div className='mainCard'>
        {
          product.map(product => <ProductCard key={product.id} title={product.title} imageURL={product.image} price={product.price} />)
        }
      </div>
    </>
  )
}

export default ProductList