import React from 'react';
import PropTypes from 'prop-types';
import JsonNode from 'components/JsonNode';
import { palette } from 'variables';
import { UL, LI } from 'static/BaseElements';

const Expanded = props => {
    const {name, keyList, level, onClick, data} = props;
    return (
        <UL className={'expanded'}>
            {keyList.map((key, i) => (
                <JsonNode
                    key={i}
                    name={key}
                    data={data[key]}
                    level={level}
                    onClick={onClick}
                />    
            ))}
        </UL>
    );
}

Expanded.propTypes = {
    data: PropTypes.object,
    name: PropTypes.string,
    keyList: PropTypes.array,
    level: PropTypes.number,
    onClick: PropTypes.func,
}

export default Expanded;
