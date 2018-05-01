import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = props => <div><h3>Liczba zadań: {props.lenght}</h3></div>;

Title.propTypes = {
	lenght: PropTypes.number
};

export default Title;
