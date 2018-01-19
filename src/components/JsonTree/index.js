import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonNode from 'components/JsonNode';
import { value, object, array } from 'utils/styles';
import { getObjectType } from 'utils/objectTypes';

class JsonTree extends Component {
    static propTypes = {
        data: PropTypes.any.isRequired,
        rootName: PropTypes.string,
        isCollapsed: PropTypes.func,
        getStyle: PropTypes.func,
    }

    static defaultProps = {
        rootName: 'root',
        isCollapsed: (keyPath, level) => (level === 0 || level === 2),
        getStyle: (keyName, data, keyPath, level, dataType) => {
            switch (dataType) {
                case 'Object':
                case 'Error':
                    return object;
                case 'Array':
                    return array;
                default:
                    return value;
            }
        },
    }

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            rootName: props.rootName,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data,
            rootName: nextProps.rootName,
        });
    }


    render() {
        const { data, rootName } = this.state;
        const { isCollapsed, getStyle } = this.props;
        const dataType = getObjectType(data);

        return (
            <JsonNode
                    data={data}
                    name={rootName}
                    collapsed={false}
                    level={0}
                    isCollapsed={isCollapsed}
                    getStyle={getStyle}
                />
        )
    }
}

export default JsonTree;
