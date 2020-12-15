import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/appRouter';
import './static/css/common.less';
import './static/css/font.css';
import './static/css/iconfont.css';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
