// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  text-align: left;
  margin-bottom: 10px; /* Add space between sections on smaller screens */
`;

const RightSection = styled.div`
  text-align: right;
  max-width: 70%;
  margin-right: 30px;

  @media (max-width: 600px) {
    max-width: 100%; /* Make the right section full width on smaller screens */
  }
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LeftSection>
        <FooterText>&copy; 2023 Your Company</FooterText>
      </LeftSection>
      <RightSection>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Terms of Use</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </RightSection>
    </FooterContainer>
  );
};

export default Footer;
