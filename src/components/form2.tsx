// src/components/forms/Form2.tsx
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

const Form2: React.FC = () => {
  return (
    <FormContainer>
      <h2>Form 2</h2>
      <Form.Item label="Field 6" name="field6" rules={[{ required: true, message: 'Please input Field 6!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Field 7" name="field7" rules={[{ required: true, message: 'Please input Field 7!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Field 8" name="field8" rules={[{ required: true, message: 'Please input Field 8!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Field 9" name="field9" rules={[{ required: true, message: 'Please input Field 9!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Field 10" name="field10" rules={[{ required: true, message: 'Please input Field 10!' }]}>
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit">Submit Form 2</Button>
    </FormContainer>
  );
};

export default Form2;
