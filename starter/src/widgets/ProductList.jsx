import { ProductCard } from "./ProductCard"

export const ProductList = (props) => {
  return (<div className="product">
    <ul className="product__list">
      {props.products.map((item) => (
        <li className="product__item" key={item.id}>
          <ProductCard {...item} />
        </li>
      ))}
    </ul>   
  </div>)
}