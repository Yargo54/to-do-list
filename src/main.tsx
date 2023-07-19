import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ru_RU from 'antd/lib/locale/ru_RU';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/'>
    <ConfigProvider locale={ru_RU}>
      <App />
    </ConfigProvider>
  </BrowserRouter>,
);
