// src/components/forms/Form1.tsx
import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

const FormContainer = styled(Form)`
  /* Add your styling here */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Form1: React.FC = () => {
  return (
    <FormContainer>
      <h2>Form 1</h2>
      <Form.Item label="Field 1" name="field1" rules={[{ required: true, message: 'Please input Field 1!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Field 2" name="field2" rules={[{ required: true, message: 'Please input Field 2!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Field 3" name="field3" rules={[{ required: true, message: 'Please input Field 3!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Field 4" name="field4" rules={[{ required: true, message: 'Please input Field 4!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Field 5" name="field5" rules={[{ required: true, message: 'Please input Field 5!' }]}>
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit">Submit Form 1</Button>
    </FormContainer>
  );
};

export default Form1;
