import React from 'react';
import styled from 'styled-components';

// Styled-components for the header wrapper
const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f2f2f2;
  color: #333;
`;

// Styled-components for the logo image
const LogoImg = styled.img`
  max-width: 200px;
`;

// Styled-components for the sign-in button
const SignInButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

function Header({ isLoggedIn }) {
  return (
    <HeaderWrapper>
      <LogoImg src="https://res.cloudinary.com/ronellepillay/image/upload/v1687557931/logo_uu9esq.jpg" alt="Brand logo" />
      <h1>TY's Designs</h1>
      {!isLoggedIn && <SignInButton>Sign In</SignInButton>}
    </HeaderWrapper>
  );
}

export default Header;
