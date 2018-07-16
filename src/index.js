const React = require('react')
const ReactDOM = require('react-dom')
const styles = require('./index.styl')
import TodoCards from './components/TodoCards'


ReactDOM.render(
  <TodoCards />,
  document.getElementById('app')
);
