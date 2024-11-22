import { Navbar } from 'flowbite-react';
import React from 'react';
import '../index.css';
import HomeButton from './HomeButton';

const MidpointNavbar = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="bg-gray-800 bg-opacity-80 backdrop-blur-sm text-white shadow-md"
    >
      <Navbar.Brand href="/">
        <div className="flex items-center space-x-3">
          <HomeButton />
          <span className="whitespace-nowrap text-xl font-semibold text-white">Midpoint</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          className="navbar-link"
        >
          Home
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MidpointNavbar;
