import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-[#0076BE] py-4 absolute bottom-0 w-full">
      <div className="container flex flex-col items-center justify-between">
        <div className="footer-content pb-3">
          <div className="footer-links">
            <ul className="list-none">
              <li><a className='text-[#D8FFFF] underline' href="/">Home</a></li>
              <li><a className='text-[#D8FFFF] underline' href="/products">Products</a></li>
              <li><a className='text-[#D8FFFF] underline' href="/about">About Us</a></li>
              <li><a className='text-[#D8FFFF] underline' href="/contact">Contact</a></li>
              <li><a className='text-[#D8FFFF] underline' href="/terms">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FoodShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
