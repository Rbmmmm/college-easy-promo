import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import zhCN from 'antd/locale/zh_CN';
import { store } from './store';
import router from './routes';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  );
};

export default App;
