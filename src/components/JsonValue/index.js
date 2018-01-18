import React, { Component } from 'react';
import PropTypes from 'prop-types';
import parse from 'utils/parse';

class JsonValue extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
        keyPath: PropTypes.array,
        level: PropTypes.number,
        dataType: PropTypes.string,
        getStyle: PropTypes.func.isRequired
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
            getStyle,
            } = this.props;
 
        const style = getStyle(name, value, keyPath, level, dataType);

        return (
            <li className="rejt-value-node" component={'li'} style={style.li}>
                <span className="rejt-name" style={style.name}>{name}: </span>
                <span className="rejt-value" style={style.value}>
                    {value}
                </span>
            </li>
        );
    }
}

export default JsonValue;
