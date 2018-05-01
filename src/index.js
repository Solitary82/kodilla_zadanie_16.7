import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './components/TodoList';

var app = document.querySelector('#app');

ReactDOM.render(
	<div>
		<TodoList/>
	</div>,
	app
);