import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonNode from 'components/JsonNode';
import { getObjectType } from 'utils';
import { LI, Property, Value } from 'static/BaseElements';
import { text } from 'variables';
import Collapsed from 'components/Collapsed';
import ExpandedArray from 'components/ExpandedArray';

class JsonArray extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        collapsed: PropTypes.bool,
        keyPath: PropTypes.array,
        level: PropTypes.number,
        dataType: PropTypes.string,
    }
    static defaultProps = {
        keyPath: [],
        level: 0
    }
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
        this.handleCollapseMode = this.handleCollapseMode.bind(this);
    }

    render() {
        const { collapsed } = this.state;
        const { name, data, keyPath, level, dataType } = this.props;
        const collapsePlaceholder = ' [...]';
        const numberOfItems = data.length;

        const itemName = (numberOfItems > 1) ? 'items' : 'item';
        
        const value = collapsed ? 
            <Collapsed
                numberOfItems={numberOfItems}
                itemName={itemName}
                onClick={this.handleCollapseMode}
                collapsed={this.state.collapsed}
                placeholder={collapsePlaceholder}
                dataType={dataType}
            /> :
            <ExpandedArray
                itemName={itemName}
                keyPath={keyPath}
                level={level}
                data={data}
                collapsed={this.state.collapsed}
                onClick={this.handleCollapseMode}
            />

        return (
            <LI className={`node type-array ${!collapsed && 'expanded'}`}>
                <Property className="property type-array" onClick={this.handleCollapseMode}>{name}: 
                    {!collapsed && <span className={'open-array'}>{' ['}</span> }
                </Property>
                {value}
                {!collapsed && <span className={'close-array'}>{'] '}</span> }
            </LI>
        );
    }

    handleCollapseMode() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
}

export default JsonArray;
