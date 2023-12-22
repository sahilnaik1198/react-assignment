import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import PaymentPage from './components/paymentpage';
import CreatePayment from './components/createpayment';
import './Apps.css';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ComponentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%; /* Set to 100% width by default */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <ComponentsContainer>
        <CreatePayment />
        <PaymentPage />
      </ComponentsContainer>
      <Footer />
    </AppContainer>
  );
};

export default App;
