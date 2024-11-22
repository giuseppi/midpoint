import { Navbar } from 'flowbite-react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import HomeButton from './HomeButton';

const MidpointNavbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="bg-gray-800 bg-opacity-80 backdrop-blur-sm dark:text-white shadow-md"
    >
      <Navbar.Brand href="/">
        <div className="flex items-center space-x-3">
          <HomeButton />
          <span className="whitespace-nowrap text-xl font-semibold dark:text-white">Midpoint</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle className="text-gray-400 hover:text-gray-400 hover:bg-gray-800 transition duration-300" />
      <Navbar.Collapse className="lg:flex lg:space-x-4 space-y-2">
        <Navbar.Link
          href="/"
          active={pathname === '/'}
          className="hover:text-gray-300 hover:bg-gray-700 font-bold px-3 py-2 rounded-md transition duration-300"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="/about"
          active={pathname === '/about'}
          className="hover:text-gray-300 hover:bg-gray-700 font-bold px-3 py-2 rounded-md transition duration-300"
        >
          About
        </Navbar.Link>
        <Navbar.Link
          href="/contact"
          active={pathname === '/contact'}
          className="hover:text-gray-300 hover:bg-gray-700 font-bold px-3 py-2 rounded-md transition duration-300 mr-2"
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MidpointNavbar;
