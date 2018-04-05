import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonTree from 'components/JsonTree';
import ErrorBoundaries from 'components/Error';
import { Main, ButtonGroup } from './Style';
import { TextArea, Container, UL } from 'static/BaseElements';
import { flatten, createTree } from 'utils';
import { text, defaultJson } from 'variables';
import Button from 'static/Button';

class MainStage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: {},
            value: ''
        };
      
        this.handleChange = this.handleChange.bind(this);
        this.handleTreefyIt = this.handleTreefyIt.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount() {
        this.setState({
            json: defaultJson,
            value: JSON.stringify(defaultJson, null, 4)
        })
    }

    render() {
        const {json} = this.state;
        return (
            <Main>
                <Container>
                    <pre>
                        <UL>
                            <JsonTree 
                                data={json}
                            />
                        </UL>    
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
                        <Button className={'button-treefyit green'} onClick={this.handleTreefyIt}>TreefyIt!</Button>
                        <Button className={'button-reset concrete'} onClick={this.handleReset}>Reset</Button>
                    </ButtonGroup>
                    
                </Container>        
            </Main>
            
        );
    }

    handleTreefyIt = event => {
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

    
    handleChange = event => {
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

    handleReset = (event) => {
        event.preventDefault();
        this.setState({
            value: JSON.stringify(defaultJson, null, 4),
            json: defaultJson,
        });
    }
}

export default MainStage;
