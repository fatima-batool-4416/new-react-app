// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
// import 'antd/dist/antd.css'; // Updated import statement

ReactDOM.render(
  <ConfigProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ConfigProvider>,
  document.getElementById('root')
);
