import React from 'react';
import PropTypes from 'prop-types';
import './TodoItems.css';

class TodoItems extends React.Component {
	constructor(props) {
		super(props);
		this.createTasks = this.createTasks.bind(this);
	}
     
	createTasks(item) {
		return <li onClick={() => this.delete(item.key)} 
			key={item.key}>{item.text}</li>;
	}

	delete(key) {
		this.props.delete(key);
	}

	render() {
		const todoEntries = this.props.entries;
		const listItems = todoEntries.map(this.createTasks);
		return (
			<ol className="theList">
				{listItems}
			</ol>
		);
	}
}

TodoItems.propTypes = {
	delete: PropTypes.func,
	entries: PropTypes.string
};

export default TodoItems;