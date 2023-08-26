import React from 'react';
import Header from '../Header';
import ProductCard from '../ProductCard';
import Footer from '../Footer';

const products = [
  {
    id: 1,
    name: 'Deluxe Cheeseburger',
    price: 9.99,
    image: 'https://i.imgur.com/74Xy9e8.png',
    description: 'A mouthwatering cheeseburger with all the fixings.'
  },
  {
    id: 2,
    name: 'Pepperoni Pizza',
    price: 12.99,
    image: 'https://i.imgur.com/UHt2NYm.png',
    description: 'Classic pepperoni pizza with gooey cheese.'
  },
  // Add more products...
];

function MainPage() {
  return (
    <div className=''>
      <Header />

      <section className="products">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-list">
            {products.map(product => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MainPage;
