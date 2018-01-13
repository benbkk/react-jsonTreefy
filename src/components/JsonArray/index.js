import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonNode from 'components/JsonNode';
import JsonAddValue from 'components/JsonAddValue';
import { getObjectType } from 'utils/objectTypes';

class JsonArray extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        isCollapsed: PropTypes.func.isRequired,
        keyPath: PropTypes.array,
        level: PropTypes.number,
        readOnly: PropTypes.func.isRequired,
        dataType: PropTypes.string,
        getStyle: PropTypes.func.isRequired,
    }
    static defaultProps = {
        keyPath: [],
        level: 0
    }
    constructor(props) {
        super(props);
        const keyPath = [
            ...props.keyPath,
            props.name,
        ];
        const level = props.level + 1;
        this.state = {
            data: props.data,
            name: props.name,
            keyPath,
            level,
            collapsed: props.isCollapsed(keyPath, level, props.data),
        };

        // Bind
        this.handleCollapseMode = this.handleCollapseMode.bind(this);
        this.renderCollapsed = this.renderCollapsed.bind(this);
        this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
    }

    

    
    renderCollapsed() {
        const { name, data, keyPath, level } = this.state;
        const { readOnly, getStyle, dataType } = this.props;

        const { collapsed } = getStyle(name, data, keyPath, level, dataType);
        const collapseValue = ' [...]';
        const numberOfItems = data.length;
        let minusElement = null;

        const itemName = (numberOfItems > 1) ? 'items' : 'item';

        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (<span className="rejt-collapsed">
            <span className="rejt-collapsed-text" style={collapsed} onClick={this.handleCollapseMode}>
                {collapseValue} {numberOfItems} {itemName}
            </span>
            {minusElement}
        </span>);
        /* eslint-enable */
    }

    renderNotCollapsed() {
        const { name, data, keyPath, level } = this.state;
        const {
            isCollapsed,
            getStyle,
            dataType
            } = this.props;
        const { delimiter, ul } = getStyle(name, data, keyPath, level, dataType);

        // const readOnlyResult = readOnly(name, data, keyPath, level, dataType);

        const list = data
            .map((item, index) => <JsonNode
                key={index}
                name={`${index}`}
                data={item}
                keyPath={keyPath}
                level={level}
                isCollapsed={isCollapsed}
                getStyle={getStyle}
            />);

        const onlyValue = true;
        let menu = null;

        const startObject = '[';
        const endObject = ']';
        return (<span className="rejt-not-collapsed">
            <span className="rejt-not-collapsed-delimiter" style={delimiter}>{startObject}</span>
            <ul className="rejt-not-collapsed-list" style={ul}>
                {list}
            </ul>
            <span className="rejt-not-collapsed-delimiter" style={delimiter}>{endObject}</span>
            {menu}
        </span>);
    }

    render() {
        const { name, collapsed, data, keyPath, level } = this.state;
        const { dataType, getStyle } = this.props;
        const value = collapsed ? this.renderCollapsed() : this.renderNotCollapsed();
        const style = getStyle(name, data, keyPath, level, dataType);

        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (
            <div className="rejt-array-node">
                <span onClick={this.handleCollapseMode}>
                    <span className="rejt-name" style={style.name}>{name} : </span>
                </span>
                {value}
            </div>
        );
        /* eslint-enable */
    }

    handleCollapseMode() {
      this.setState({
          collapsed: !this.state.collapsed,
      });
  }
}

export default JsonArray;
