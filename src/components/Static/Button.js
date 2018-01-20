import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from 'variables';

const Button = props => (
    <button className={props.className}>
        {props.children}
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}