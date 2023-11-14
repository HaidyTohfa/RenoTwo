// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Sidebar.css'; // Import the stylesheet

const Submenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleSubmenuClick = () => {
    setIsOpen(!isOpen);
    setIsActive(true);
  };

  const handleItemClick = () => {
    setIsActive(true);
  };

  return (
    <li>
      <div
        className={`submenu-title ${isOpen ? 'open' : ''} ${isActive ? 'active' : ''}`}
        onClick={handleSubmenuClick}
      >
        <span>{title}</span>
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
      {isOpen && (
        <ul className={`submenu ${isActive ? 'active' : ''}`}>
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.to} onClick={handleItemClick} className={isActive ? 'active' : ''}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar = () => {
  const submenuData = [
    { title: 'Submenu 1', items: [{ to: '/submenu1/item1', label: 'Item 1' }, { to: '/submenu1/item2', label: 'Item 2' }] },
    { title: 'Submenu 2', items: [{ to: '/submenu2/item1', label: 'Item 1' }, { to: '/submenu2/item2', label: 'Item 2' }] },
  ];

  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <SearchIcon className="search-icon" />
      </div>
      <ul>
        <li>
          <Link to="/" className="menu-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="menu-item">
            Dashboard
          </Link>
        </li>
        {submenuData.map((submenu, index) => (
          <Submenu key={index} title={submenu.title} items={submenu.items} />
        ))}
        <li>
          <Link to="/contact" className="menu-item">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
