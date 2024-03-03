// import module.css here;
import "../components/Product.css";


const Product = ({name,price,quantity,id,handleQty}) => {
  return (
    <>
      <div data-testid="product-container" className="container">
        <h2 data-testid="product-name" className="name">{name}</h2>
        <h2 data-testid="product-price">{price}</h2>
        <button onClick={()=>handleQty(id,1)} data-testid="quantity-increment" className="btn">+</button>
        <h2 data-testid="product-quantity">{quantity}</h2>
        <button onClick={()=>handleQty(id,-1)} data-testid="quantity-decrement" className="btn">-</button>
      </div>
    </>
  );
};
export default Product;
