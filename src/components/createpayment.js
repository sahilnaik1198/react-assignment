import React from 'react';
import styled from 'styled-components';
import {  FaChurch, FaRegUser, FaBox    } from 'react-icons/fa';

const CreatePaymentContainer = styled.div`
  max-width: 400px;
//   margin-right: 30px; 
  margin-left: 30px; 
  padding-left: 10px; 
  margin-top: 20px; 
  padding-top: 0;
//   padding-right: 20px;
`;


const Title = styled.h1`
  text-align: center;
  margin-bottom: 0px;
`;

const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0px; 
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const SubTitles = styled.h4`
  margin-bottom: 0px; 
`;

const DataContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CreatePayment = () => {
  return (
    <CreatePaymentContainer>
      <Title>Create Payment</Title>

      <SubTitleContainer>
        <SubTitles>Grave Site</SubTitles>
      </SubTitleContainer>
      <DataContainer>
        <Icon>
        <FaChurch     />
        </Icon>
        <p>01-1001-05.0</p>
      </DataContainer>

      <SubTitleContainer>
        <SubTitles>Owner</SubTitles>
      </SubTitleContainer>
      <DataContainer>
        <Icon>
          <FaRegUser />
        </Icon>
        <p>Lorraine & Russ Steward</p>
      </DataContainer>

      <SubTitleContainer>
        <SubTitles>Person Buried</SubTitles>
      </SubTitleContainer>
      <DataContainer>
        <Icon>
          <FaBox />
        </Icon>
        <p>Edgar Steward</p>
      </DataContainer>
    </CreatePaymentContainer>
  );
};

export default CreatePayment;
