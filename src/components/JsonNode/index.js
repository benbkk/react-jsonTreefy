
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonValue from 'components/JsonValue';
import JsonObject from 'components/JsonObject';
import JsonArray from 'components/JsonArray';
import JsonFunctionValue from 'components/JsonFunctionValue';
import { getObjectType } from 'utils/objectTypes';

class JsonNode extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        data: PropTypes.any,
        isCollapsed: PropTypes.func.isRequired,
        keyPath: PropTypes.array,
        level: PropTypes.number,
        getStyle: PropTypes.func.isRequired,
    }
    static defaultProps = {
        keyPath: [],
        level: 0
    }
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            name: props.name,
            keyPath: props.keyPath,
            level: props.level,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data,
        });
    }

    render() {
        const { data, name, keyPath, level } = this.state;
        const {
            isCollapsed,
            getStyle
        } = this.props;
      
        const dataType = getObjectType(data);
        switch (dataType) {
            case 'Error':
                return (
                    <JsonObject
                        data={data}
                        name={name}
                        isCollapsed={isCollapsed}
                        keyPath={keyPath}
                        level={level}
                        dataType={dataType}
                        getStyle={getStyle}
                    />
            );
            case 'Object':
                return (<JsonObject
                    data={data}
                    name={name}
                    isCollapsed={isCollapsed}
                    keyPath={keyPath}
                    level={level}
                    dataType={dataType}
                    getStyle={getStyle}
                    
                />);
            case 'Array':
                return (<JsonArray
                    data={data}
                    name={name}
                    isCollapsed={isCollapsed}
                    keyPath={keyPath}
                    level={level}

                    dataType={dataType}
                    getStyle={getStyle}
                    
                />);
            case 'String':
                return (<JsonValue
                    name={name}
                    value={`"${data}"`}
                    originalValue={data}
                    keyPath={keyPath}
                    level={level}

                    dataType={dataType}
                    getStyle={getStyle}
                    
                />);
            case 'Number':
                return (<JsonValue
                    name={name}
                    value={data}
                    originalValue={data}
                    keyPath={keyPath}
                    level={level}
                   
                    dataType={dataType}
                    getStyle={getStyle}
                   
                />);
            case 'Boolean':
                return (<JsonValue
                    name={name}
                    value={data ? 'true' : 'false'}
                    originalValue={data}
                    keyPath={keyPath}
                    level={level}
 
                   
                    dataType={dataType}
                    getStyle={getStyle}
                   
                />);
            case 'Date':
                return (<JsonValue
                    name={name}
                    value={data.toISOString()}
                    originalValue={data}
                    keyPath={keyPath}
                    level={level}

                   
                    dataType={dataType}
                    getStyle={getStyle}
                   
                />);
            case 'Null':
                return (<JsonValue
                    name={name}
                    value={'null'}
                    originalValue={'null'}
                    keyPath={keyPath}
                    level={level}
                   
                    dataType={dataType}
                    getStyle={getStyle}
                   
                />);
            case 'Undefined':
                return (<JsonValue
                    name={name}
                    value={'undefined'}
                    originalValue={'undefined'}
                    keyPath={keyPath}
                    level={level}
                    
                    dataType={dataType}
                    getStyle={getStyle}
                    
                />);
            case 'Function':
                return (<JsonFunctionValue
                    name={name}
                    value={data.toString()}
                    originalValue={data}
                    keyPath={keyPath}
                    level={level}
                    
                   
                    dataType={dataType}
                    getStyle={getStyle}
                   
                />);
            case 'Symbol':
                return (<JsonValue
                    name={name}
                    value={data.toString()}
                    originalValue={data}
                    keyPath={keyPath}
                    level={level}
                   
                    dataType={dataType}
                    getStyle={getStyle}
                    
                />);
            default:
                return null;
        }
    }
}

export default JsonNode;
