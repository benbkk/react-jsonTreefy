import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonNode from 'components/JsonNode';
import { getObjectType } from 'utils';

const JsonTree = props => {
    const { name, data, rootName, isCollapsed, level } = props;
    return (
        <JsonNode
            data={data}
            name={rootName}
            isCollapsed={isCollapsed}
            level={level}
        />    
    )
}

JsonTree.propTypes = {
    name: PropTypes.string,
    data: PropTypes.any,
    rootName: PropTypes.string,
    isCollapsed: PropTypes.bool,
    level: PropTypes.number
}

JsonTree.defaultProps = {
    rootName: 'root',
     // isCollapsed: (keyPath, level) => ( level === 0 || level !== 2 )
}

export default JsonTree;
