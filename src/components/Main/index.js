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
            value: '',
        };
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    render() {
        const {json} = this.state;
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
                    <button onClick={this.handleReset}>Reset</button>
                </ButtonGroup>    
            </MainStage>
        );
    }

    handleSubmit(event) {
            event.preventDefault();
            let json = Object.assign([], this.state.json);
            this.setState({
                json: createTree(flatten(json), 'parent_id'),
            });
    }

    handleChange(event) {
        event.preventDefault();
        const inputValue = event.target.value;
        let json = JSON.parse(inputValue);

        this.setState({
            value: inputValue,
            json
        });
    }

    handleReset() {
        this.setState({
            value: '',
            json: defaultJson,
            
        });
    }
}

export default Main;
