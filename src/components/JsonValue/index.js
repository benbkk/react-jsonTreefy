import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HotKeys } from 'react-hotkeys';
import parse from 'utils/parse';
import { isComponentWillChange } from 'utils/objectTypes';

class JsonValue extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
        keyPath: PropTypes.array,
        level: PropTypes.number,
        dataType: PropTypes.string,
        getStyle: PropTypes.func.isRequired,
        readOnly: PropTypes.func.isRequired,
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
            readOnly,
            dataType,
            getStyle,
            } = this.props;

        const style = getStyle(name, value, keyPath, level, dataType);
        let result = (
            <span className="rejt-value" style={style.value}>
                {value}
            </span>
        );

        const handlers = {
            esc: this.handleCancelEdit,
            enter: this.handleEdit,
        };

        return (
            <HotKeys className="rejt-value-node" component={'li'} style={style.li} handlers={handlers}>
                <span className="rejt-name" style={style.name}>{name} : </span>{result}
            </HotKeys>
        );
    }
}

export default JsonValue;
