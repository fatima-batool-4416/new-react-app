import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Form1: React.FC = () => {
  return (
    <FormContainer>
      <h2>Form 1</h2>
      {/* Add form fields here */}
      <SubmitButton type="submit">Submit Form 1</SubmitButton>
    </FormContainer>
  );
};

export default Form1;
