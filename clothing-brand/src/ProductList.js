import React from 'react';
import Product from './components/Product';
import blackShimmerDress from './images/blackShimmerDress.jpg';
import redDress from './images/redDress.jpg';
import dress from './images/dress.jpg';
//Products with all their neccessary details: image,title, description, price
const products = [
  {
    imgSrc: blackShimmerDress,
    title: 'Gold One-Shoulder Dress',
    description: 'Sexy Black one-shoulder dress',
    price: '1300',
    additionalInfo: 'Perfect for special occasions and parties.',
  },
  {
    imgSrc: redDress,
    title: 'Long Red Dress',
    description: 'Lady in Red, you wanna be naughty or nice',
    price: '1200',
    additionalInfo: 'Classic and elegant design for a glamorous look.',
  },
  {
    imgSrc: dress,
    title: 'Ladies Black Cocktail Dress',
    description: 'Going on a date, look no further.',
    price: '1100',
    additionalInfo: 'Versatile and stylish dress suitable for various events.',
  },
];

function ProductList() {
  const handleAddToCart = (product) => {
    // Logic to add the product to the shopping cart
    console.log(`Product ${product.title} added to shopping cart`);
  };

  return (
    <div>
      <h2>Shop</h2>
      <p>Explore our collection of stunning dresses:</p>
      {products.map((product, index) => (
        <Product key={index} {...product} addToCart={() => handleAddToCart(product)} />
      ))}
    </div>
  );
}

export default ProductList;
