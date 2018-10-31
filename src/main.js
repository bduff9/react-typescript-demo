// @ts-check
import { createElement } from 'react';
import { render } from 'react-dom';
import 'papercss/dist/paper.min.css';

import './style.css';
import { App } from './app/app';

const bootstrap = () => {
  const mountTo = document.getElementById('app');

  render(createElement(App), mountTo)
};

bootstrap();
