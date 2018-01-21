import React from 'react';
import PropTypes from 'prop-types'
import { LI, Property, Value } from 'static/BaseElements';

const JsonValue = props => {
    const { name, value } = props;
    return (
        <LI className="value-node">
            <Property className="property">{name}: </Property>
            <Value className="value">{value}</Value>
        </LI>
    );
}

JsonValue.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
}

export default JsonValue;
