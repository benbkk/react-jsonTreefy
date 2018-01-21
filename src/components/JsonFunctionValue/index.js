import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LI, Property, Value } from 'static/BaseElements';

const JsonFunction = props => {
    const { name, value } = props;
    return (
        <LI className="rejt-function-value-node">
            <Property className="rejt-name">{name} : </Property>
            <Value className="rejt-value">{value}</Value>
        </LI>
    )
}

JsonFunction.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
}

export default JsonFunction;

