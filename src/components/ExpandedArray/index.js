import React from 'react';
import PropTypes from 'prop-types';
import JsonNode from 'components/JsonNode';
import { UL } from 'static/BaseElements';

const ExpandedArray = props => {
    const {name, data, level, onClick} = props;
    return (
        <UL className={'expanded'}>
            {data.map((item, i) => (
                <JsonNode
                    key={i}
                    name={`${i}`}
                    data={item}
                    level={level}
                    onClick={onClick}
                />    
            ))}
        </UL>
    );
}

ExpandedArray.propTypes = {
    data: PropTypes.array,
    name: PropTypes.string,
    level: PropTypes.number,
    onClick: PropTypes.func,
}

export default ExpandedArray;
