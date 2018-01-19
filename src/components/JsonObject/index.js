import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonNode from 'components/JsonNode';
import { getObjectType } from 'utils/objectTypes';

class JsonObject extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        isCollapsed: PropTypes.func.isRequired,
        keyPath: PropTypes.array,
        level: PropTypes.number,
        dataType: PropTypes.string,
        getStyle: PropTypes.func.isRequired,
    }
    static defaultProps = {
        keyPath: [],
        level: 0
    }
    constructor(props) {
        super(props);
        const level = props.level + 1;
        const keyPath = level === 0 ? 
            [] : 
            [
                ...props.keyPath,
                props.name,
            ];
        this.state = {
            name: props.name,
            data: props.data,
            keyPath,
            level,
            collapsed: props.isCollapsed(keyPath, level, props.data),
        };

        // Bind
        this.handleCollapseMode = this.handleCollapseMode.bind(this);
        this.renderCollapsed = this.renderCollapsed.bind(this);
        this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data,
        });
    }

    renderCollapsed() {
        const { name, keyPath, level, data } = this.state;
        const { dataType, getStyle } = this.props;

        const { collapsed } = getStyle(name, data, keyPath, level, dataType);
        const keyList = Object.getOwnPropertyNames(data);
        const collapseValue = ' {...}';
        const numberOfItems = keyList.length;
        const itemName = (numberOfItems > 1) ? 'keys' : 'key';

        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (<span className="rejt-collapsed">
            <span className="rejt-collapsed-text" style={collapsed} onClick={this.handleCollapseMode}>
                {collapseValue} {numberOfItems} {itemName}
            </span>
        </span>);
        /* eslint-enable */
    }

    renderNotCollapsed() {
        const { name, data, keyPath, level } = this.state;
        const {
            isCollapsed,
            getStyle,
            dataType,
           
            } = this.props;

        const { ul, delimiter } = getStyle(name, data, keyPath, level, dataType);
        const keyList = Object.getOwnPropertyNames(data);
        let minusElement = null;

        const list = keyList
            .map(key => <JsonNode
                key={key}
                name={key}
                data={data[key]}
                keyPath={keyPath}
                level={level}
                isCollapsed={isCollapsed}
               
                getStyle={getStyle}
               
            />);

        const startObject = '{';
        const endObject = '}';

        let menu = null;
        // Check if readOnly is activated
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
        const { getStyle, dataType } = this.props;
        const value = collapsed ? this.renderCollapsed() : this.renderNotCollapsed();
        const style = getStyle(name, data, keyPath, level, dataType);

        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (
            <div className="rejt-object-node">
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
export default JsonObject;
