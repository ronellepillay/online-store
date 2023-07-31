import React from 'react';
import { Link } from 'react-router-dom';
//navigation bar with different links to take you to different pages of the website
function Navigation() {
  return (
    <nav>
      <ul>
        {/* Home link */}
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* Profile link */}
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        {/* Shop link */}
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        {/* Legal link */}
        <li>
          <Link to="/legal">Legal</Link>
        </li>
        <li>
          <Link to="/interest-calculator">Interest Calculator</Link>
        </li> {/* interest calculator */}
      </ul>
    </nav>
  );
}

export default Navigation;
