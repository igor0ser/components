import { render } from 'react-dom';
import { createElement } from 'react';
import './styles.css';
import App from './App';

const root = document.getElementById('root');
render(createElement(App), root);
