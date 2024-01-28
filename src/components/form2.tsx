import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  /* Add your styling here */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  /* Add your button styling here */
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Form2: React.FC = () => {
  return (
    <FormContainer>
      <h2>Form 2</h2>
      {/* Add form fields here */}
      <SubmitButton type="submit">Submit Form 2</SubmitButton>
    </FormContainer>
  );
};

export default Form2;
