import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import MainStage from './StyledMain';

class JsonViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: { 'One': 1, 'Two': 2, 'Three': [1,2,3] },
            indent: '2',
        }
    }
    render() {
        return (
            <MainStage className={'app--mainstage'}>
            </MainStage>
        )
    }
}

export default JsonViewer;
