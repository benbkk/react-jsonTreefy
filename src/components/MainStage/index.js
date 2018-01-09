import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { flatten, replacer, getObjectType } from '../../utilities';

import MainStage from './StyledMain';
import { Form, TextArea } from 'Static/FormElements';

class JsonViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputData: {},
            books: [],
            error: false,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        console.log(this.state.books);
        // const inputDataParsed = JSON.parse(this.state.inputData);
        return (
            <Form className={'app--mainstage'}>
                <TextArea
                    className={'input-data'}
                    name={'inputData'}
                    placeHolder={'Paste your data here'}
                    onChange={this.handleChange} 
                >
                </TextArea>
                {!this.state.books && 'Loading...'}
                <div>
                    <pre>{JSON.stringify(this.state.books, replacer, 3)}</pre>
                </div>

            </Form>
        )
    }

    handleChange(e) {
        /* let data = JSON.parse(e.target.value);
        let dataType = getObjectType(data);
        console.log(dataType);
        data = Object.assign([], Object.values(data));
        const books = flatten(data);
        // const books = Object.assign([], flatten(Object.values(data)));
        this.setState({
            books: books,
        }) */
    }
}

export default JsonViewer;
