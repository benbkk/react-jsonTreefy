/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 13/10/16
 * Licence: See Readme
 */
/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonNode from 'components/JsonNode';
import { value, object, array } from 'utils/styles';
// import { ADD_DELTA_TYPE, REMOVE_DELTA_TYPE, UPDATE_DELTA_TYPE } from 'utils/deltaTypes';
import { getObjectType } from 'utils/objectTypes';

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
// Prop types
const propTypes = {
    
    getStyle: PropTypes.func,
    addButtonElement: PropTypes.element,
    cancelButtonElement: PropTypes.element,
    editButtonElement: PropTypes.element,
    inputElement: PropTypes.element,
    textareaElement: PropTypes.element,
    minusMenuElement: PropTypes.element,
    plusMenuElement: PropTypes.element,
    beforeRemoveAction: PropTypes.func,
    beforeAddAction: PropTypes.func,
    beforeUpdateAction: PropTypes.func,
};
// Default props
const defaultProps = {
    rootName: 'root',
    isCollapsed: (keyPath, deep) => (deep !== 0),
    getStyle: (keyName, data, keyPath, deep, dataType) => {
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
    /* eslint-disable no-unused-vars */
    readOnly: (keyName, data, keyPath, deep, dataType) => false,
    onFullyUpdate: (data) => {
    },
    onDeltaUpdate: (type, keyPath, deep, key, newValue, oldValue) => {
    },
    beforeRemoveAction: (key, keyPath, deep, oldValue) => new Promise(resolve => resolve()),
    beforeAddAction: (key, keyPath, deep, newValue) => new Promise(resolve => resolve()),
    beforeUpdateAction: (key, keyPath, deep, oldValue, newValue) => new Promise(resolve => resolve()),
    /* eslint-enable */
};

/* ************************************* */
/* ********      COMPONENT      ******** */
/* ************************************* */
class JsonTree extends Component {
    static propTypes = {
        data: PropTypes.any.isRequired,
        rootName: PropTypes.string,
        isCollapsed: PropTypes.func,
        getStyle: PropTypes.func,
    }

    static defaultProps = {
        rootName: 'root',
        isCollapsed: (keyPath, deep) => (deep !== 0),
        getStyle: (keyName, data, keyPath, deep, dataType) => {
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
        const {
            isCollapsed,
            getStyle,
            } = this.props;

        // Node type
        const dataType = getObjectType(data);
        // if (dataType !== 'Object' || dataType !== 'Array') return <h3 className={'rejt-tree'}>{'Data must be either Array or Object!'}</h3>;
        return (
            <JsonNode
                data={data}
                name={rootName}
                collapsed={false}
                level={-1}
                isCollapsed={isCollapsed}
                getStyle={getStyle}
            />
        )
    }
}

export default JsonTree;
