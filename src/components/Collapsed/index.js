import React from 'react';
import PropTypes from 'prop-types';
import { text } from 'variables';
import { Value } from 'static/BaseElements';


const Collapsed = (props) => {
    const { placeholder, numberOfItems, itemName, onClick, dataType } = props;

    return (
        <Value className={`collapsed data-${dataType}`}>
            <span className={`value data-${dataType}`} onClick={onClick}>
                <span className={'placeholder'}> {placeholder}</span> <span className={'unit-value'}>{numberOfItems} {itemName}</span>
            </span>
        </Value>      
    );
};

Collapsed.propTypes = {
    dataType: PropTypes.string,
    placeholder: PropTypes.string,
    numberOfItems: PropTypes.number,
    itemName: PropTypes.string,
    onClick: PropTypes.func,
}

export default Collapsed;