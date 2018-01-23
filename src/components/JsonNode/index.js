
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonValue from 'components/JsonValue';
import JsonObject from 'components/JsonObject';
import JsonArray from 'components/JsonArray';
import JsonFunctionValue from 'components/JsonFunctionValue';
import { getObjectType } from 'utils';

const JsonNode = props => {
    const {name, data, isCollapsed, keyPath, level} = props;
    const dataType = getObjectType(data);
    switch (dataType) {
        case 'Error':
        case 'Object':
            return (
                <JsonObject
                    data={data}
                    name={name}
                    isCollapsed={isCollapsed}
                    keyPath={keyPath}
                    level={level}
                    dataType={dataType}
                />
        );
        case 'Array':
            return (
                <JsonArray
                data={data}
                name={name}
                isCollapsed={isCollapsed}
                keyPath={keyPath}
                level={level}
                dataType={dataType}            
            />);
        case 'String':
        case 'Number':
            return (<JsonValue
                name={name}
                value={`"${data}"`}
                originalValue={data}
                keyPath={keyPath}
                level={level}
                dataType={dataType}
            />);
        case 'Boolean':
            return (<JsonValue
                name={name}
                value={data ? 'true' : 'false'}
                originalValue={data}
                keyPath={keyPath}
                level={level}
                dataType={dataType}
            />);
        case 'Date':
            return (<JsonValue
                name={name}
                value={data.toISOString()}
                originalValue={data}
                keyPath={keyPath}
                level={level}
                dataType={dataType}
            />);
        case 'Null':
            return (<JsonValue
                name={name}
                value={'null'}
                originalValue={'null'}
                keyPath={keyPath}
                level={level}     
                dataType={dataType}
            />);
        case 'Undefined':
            return (<JsonValue
                name={name}
                value={'undefined'}
                originalValue={'undefined'}
                keyPath={keyPath}
                level={level}               
                dataType={dataType}          
            />);
        case 'Function':
        case 'Symbol':
            return (<JsonValue
                name={name}
                value={data.toString()}
                originalValue={data}
                keyPath={keyPath}
                level={level}
                dataType={dataType}
            />);
        default:
            return null;
    }
}

JsonNode.propTypes = {
    name: PropTypes.string,
    data: PropTypes.any,
    isCollapsed: PropTypes.bool,
    keyPath: PropTypes.array,
    level: PropTypes.number,
}

JsonNode.defaultProps = {
    keyPath: [],
    level: 0
}

export default JsonNode;
