// PaymentPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const PaymentPageContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 10px; 
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const InputContainer = styled.div`
  width: calc(50% - 7.5px);
`;

const Label = styled.label`
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 8px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: calc(100% - 20px);
  padding: 8px;
  margin-bottom: 10px;
  height: 40px; 
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Button = styled.button`
  padding: 12px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  padding: 12px;
  text-decoration: none;
  cursor: pointer;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 5px;

  svg {
    margin-right: 5px;
  }
`;

const PaymentPage = () => {
  const [receiptNumber, setReceiptNumber] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [amount, setAmount] = useState('');
  const [datePaid, setDatePaid] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [payor, setPayor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
      receiptNumber,
      transactionId,
      amount,
      datePaid,
      paymentType,
      payor,
      description,
    });
  };

  const handleCancel = () => {
    console.log('Payment canceled');
  };

  const handleAddAnotherPayment = () => {
    console.log('Add another payment');
  };

  return (
    <PaymentPageContainer>
      <Title>Payment Details</Title>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Receipt Number</Label>
          <Input
            type="text"
            value={receiptNumber}
            onChange={(e) => setReceiptNumber(e.target.value)}
            required
          />
        </InputContainer>

        <InputContainer>
          <Label>Transaction ID</Label>
          <Input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            required
          />
        </InputContainer>

        <InputContainer>
          <Label>Amount</Label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </InputContainer>

        <InputContainer>
          <Label>Date Paid</Label>
          <Input
            type="date"
            value={datePaid}
            onChange={(e) => setDatePaid(e.target.value)}
            required
          />
        </InputContainer>

        <InputContainer>
          <Label>Payment Type</Label>
          <Input
            type="text"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            required
          />
        </InputContainer>

        <InputContainer>
          <Label>Payor</Label>
          <Input
            type="text"
            value={payor}
            onChange={(e) => setPayor(e.target.value)}
            required
          />
        </InputContainer>

        <InputContainer>
          <Label>Description</Label>
          <TextArea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputContainer>

        <ButtonContainer>
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
          <LinkButton onClick={handleAddAnotherPayment}>
            <FaPlus />
            Add Another Payment
          </LinkButton>
        </ButtonContainer>
      </Form>
    </PaymentPageContainer>
  );
};

export default PaymentPage;
