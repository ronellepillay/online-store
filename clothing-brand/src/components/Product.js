import React from 'react';
import { ProductWrapper, AddToCartButton } from './styled'; // Importing the ProductWrapper and AddToCartButton styled components
//product page with everything you will see on the product: image, title, description, price & add to cart button
function Product({ imgSrc, title, description, price, addToCart }) {
  return (
    <ProductWrapper>
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>R{price}</p>
      <AddToCartButton onClick={addToCart}>Add to Shopping Cart</AddToCartButton>
    </ProductWrapper>
  );
}

export default Product;
