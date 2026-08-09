import '../styles/product-card.css';

export const ProductCard = (props) => {
  const dataDiscount = props.price * props.discount;
  return (
    <div className="product-card">
      <div className="product-card__wrap-img">
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="product-card__cont">
        <div className="product-card__cont-top">
          <span className='product-card__price'>
            {props.price} &#8364;
          </span>
          {props.discount && 
            <span className='product-card__price-old'>{dataDiscount} &#8364;</span>
          }
        </div>
        <strong className='product-card__title'>
          {props.title}
        </strong>
      </div>
    </div>
  )
}