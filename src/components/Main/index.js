import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonTree from 'components/JsonTree';
import { Main, ButtonGroup } from './Style';
import { TextArea, Container } from 'static/BaseElements';
import { flatten, createTree } from 'utils';
import { text, defaultJson } from 'variables';

class MainStage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: {},
            value: '',
        };
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount() {
        this.setState({
            json: defaultJson,
        })
    }

    render() {
        const {json} = this.state;
        return (
            <Main>
                <Container>
                    <pre>
                        <ul>
                            <JsonTree 
                                data={json}
                            />
                        </ul>    
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
                        <button onClick={this.handleSubmit}>Treefy!</button>
                        <button onClick={this.handleReset}>Reset</button>
                    </ButtonGroup>
                </Container>        
            </Main>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        let json = Object.assign([], this.state.json);
        try {
            try {
                json = flatten(json);
            } catch(err) {
                return err;
            } 
            json = createTree(json, 'parent_id');
        } catch(err) {
            return err;
        }
        this.setState({
            json
        });
    }

    handleChange(event) {
        const inputValue = event.target.value;
        let json;
            try {
                json = JSON.parse(inputValue)
            } catch(err) {
                return err;
            }
        
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

export default MainStage;
