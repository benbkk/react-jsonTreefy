import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HotKeys } from 'react-hotkeys';
import parse from 'utils/parse';
import { isComponentWillChange } from 'utils/objectTypes';

class JsonFunctionValue extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
        keyPath: PropTypes.array,
        level: PropTypes.number,
        dataType: PropTypes.string,
        getStyle: PropTypes.func.isRequired
    }
    static defaultProps = {
        keyPath: [],
        level: 0,
    }
    constructor(props) {
        super(props);
        const keyPath = [
            ...props.keyPath,
            props.name,
        ];
        this.state = {
            value: props.value,
            name: props.name,
            keyPath,
            level: props.level,
        };
    }

    render() {
        const { name, value, keyPath, level } = this.state;
        const {
            dataType,
            getStyle
            } = this.props;

        const style = getStyle(name, value, keyPath, level, dataType);
       

       

        return (
            <li className="rejt-function-value-node" style={style.li}>
                <span className="rejt-name" style={style.name}>{name} : </span>
                <span className="rejt-value" style={style.value}>{value}</span>
            </li>
        );
    }
}

export default JsonFunctionValue;
