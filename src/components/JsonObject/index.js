import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonNode from 'components/JsonNode';
import { getObjectType } from 'utils';
import { UL, LI, Property, Value } from 'static/BaseElements';
import { text } from 'variables';
import Collapsed from 'components/Collapsed';
import Expanded from 'components/Expanded';

class JsonObject extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        isCollapsed: PropTypes.bool,
        keyPath: PropTypes.array,
        level: PropTypes.number,
        dataType: PropTypes.string,
        numberOfItems: PropTypes.number
    }
    static defaultProps = {
        keyPath: [],
        level: 0
    }
    constructor(props) {
        super(props);
        
        this.state = {
            collapsed: false,
        };

        // Bind
        this.handleCollapseMode = this.handleCollapseMode.bind(this);
    }

    render() {
        const { collapsed } = this.state;
        const { name, data, keyPath, level, isCollapsed, dataType } = this.props;
        const keyList = Object.getOwnPropertyNames(data);
        const placeholder = ' {...}';
        let { numberOfItems } = this.props;
        numberOfItems = keyList.length;
        const itemName = (numberOfItems > 1) ? 'keys' : 'key';
        
        const value = collapsed ? 
            <Collapsed
                numberOfItems={numberOfItems}
                itemName={itemName}
                placeholder={placeholder}
                onClick={this.handleCollapseMode}
                collapsed={this.state.collapsed}
                dataType={dataType}
            /> :
            <Expanded
                keyList={keyList}
                itemName={itemName}
                keyPath={keyPath}
                level={level}
                data={data}
                collapsed={this.state.collapsed}
                onClick={this.handleCollapseMode}
                dataType={dataType}
            />
        return (
            <LI className="node type-object">
                <Property className="property type-object" onClick={this.handleCollapseMode}>{name}:
                {!collapsed && <span className={'open-object'}>{' {'}</span>} 
                </Property>
                {value}
                {!collapsed && <span className={'close-object'}>{'}'}</span>}
            </LI>
        );
    }

    handleCollapseMode() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
}
export default JsonObject;
