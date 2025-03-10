import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gray-800 p-8 text-white'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Travel Agency</h2>
          <p>Your trusted partner for unforgettable travel experiences. Explore the world's best travel company.</p>
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Quick Links</h2>
          <ul className='space-y-2'>
            <li><Link to="/" className='hover:underline'>Home</Link></li>
            <li><Link to="/gallery" className='hover:underline'>Gallery</Link></li>
            <li><Link to="/contact" className='hover:underline'>Contact</Link></li>
            <li><Link to="/about" className='hover:underline'>About</Link></li>
          </ul>
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Follow Us</h2>
          <div className='flex space-x-4 mb-4'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:text-blue-400'><FaFacebook size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-pink-500 hover:text-pink-400'><FaInstagram size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-300'><FaTwitter size={24} /></a>
          </div>
          <form className='flex items-center'>
            <input type="email" placeholder='Enter your email' className='w-full p-2 rounded-l-lg bg-gray-700 border border-gray-600 text-gray-200' />
            <button className='bg-blue-600 text-white px-4 py-2 rounded-r-lg border border-blue-500 hover:bg-blue-500'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='border-t border-gray-700 pt-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <p>&copy; 2024 Travel Agency. All rights reserved.</p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <Link to="/" className='hover:underline'>Privacy Policy</Link>
            <Link to="/" className='hover:underline'>Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
