import ProductReviewCard from './ProductReviewCard'
import '../styles/Productreviews.css'
const ProductReviews = ({productReviews}) => {
  return (
    <div className="productreviews">
      {productReviews.map((item,index)=>(
        <ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image}/>
      ))}
    </div>
  )
}

export default ProductReviews;
