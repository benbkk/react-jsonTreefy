import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonTree from 'components/JsonTree';
import { MainStage, ButtonGroup } from './MainStage';
import { TextArea } from 'static/FormElements';
import { flatten, createTree } from 'utils';
import { text } from 'variables';

const defaultJson = {
    error: new Error('error'),
    func: () => console.log('test'),
    text: 'text',
    int: 100,
    boolean: true,
    null: null,
    undefined: undefined,
    object: {
        text: 'text',
        int: 100,
        boolean: true,
    },
    array: [
        1,
        2,
        3,
        {
            string: 'test',
        }
    ]
}
    

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: defaultJson,
            value: {},
        };
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    render() {
        const {json} = this.state;
        const style4 = {
            margin: '0 15px',
            minWidth: '200px',
        };
        return (
            <MainStage>
                <pre>
                    <JsonTree data={json}/>
                </pre>
                <TextArea
                    id={'textAreaId'}
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder={text.textAreaPlaceholder}
                    className={'input-textarea'}
                    label={text.textAreaPlaceholder}
                    labelIsHidden={true}
                />
                <ButtonGroup className={'action-buttons'}>
                    <button onClick={this.handleSubmit}>Submit</button>
                    <button onClick={this.handleReset}>Default</button>
                </ButtonGroup>    
            </MainStage>
        );
    }

    handleSubmit() {
        let {value, json} = this.state;
        json = JSON.parse(value);
        json = flatten(Object.assign([], json));
        json = createTree(json, 'parent_id');
        
        this.setState({
            json,
        });
    }

    handleChange(event) {
        let inputValue = event.target.value;
        this.setState({
            value: inputValue
        });
    }

    handleReset() {
        this.setState({
            json: Object.assign([], defaultJson),
            value: JSON.stringify(defaultJson, null, 3)
        });
    }
}

export default Main;
