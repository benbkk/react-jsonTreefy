import React from 'react';
import PropTypes from 'prop-types';

const JSONValue = ({
    entryId,
    nodeType,
    labelRenderer, 
    keyPath,
    valueRenderer,
    value,
    valueGetter,
}) => (
    <li>
        <label htmlFor={entryId}>
            {labelRenderer(keyPath, nodeType, false, false)}
        </label>
        <span>
            {valueRenderer(valueGetter(valule), value, ...keyPath)}
        </span> 
    </li> 
);

JSONValue.propTypes = {
    nodeType: PropTypes.string.isRequired,
    labelRenderer: PropTypes.func.isRequired,
    keyPath: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ).isRequired,
    valueRenderer: PropTypes.func.isRequired,
    value: PropTypes.any,
    valueGetter: PropTypes.func,
}

JSONValue.defaultProps = {
    valueGetter: value => value,
};
  
export default JSONValue;