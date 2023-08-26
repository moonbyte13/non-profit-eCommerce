import React from 'react';

function Header() {
  return (
    <header className="header bg-[#48BF91] py-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-4xl font-bold text-[#C8FFFF] no-underline">FoodShop</a>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products"
            className="px-3 py-2 rounded-md border border-gray-300 focus:ring focus:ring-primary focus:outline-none"
          />
          <button className="ml-2 px-4 py-2 bg-[#0076BE] text-[#C8FFFF] rounded-md border-[#4DB4D7]">Search</button>
        </div>
        <ul className="nav-links space-x-4 list-none flex flex-row">
          <li><a href="/" className="text-[#C8FFFF] no-underline">Home</a></li>
          <li><a href="/products" className="text-[#C8FFFF] underline">Products</a></li>
          <li><a href="/about" className="text-[#C8FFFF] underline">About Us</a></li>
          <li><a href="/contact" className="text-[#C8FFFF] underline">Contact</a></li>
          <li><a href="/cart" className="text-[#C8FFFF] underline">Cart</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
