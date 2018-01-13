import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonTree from 'components/JsonTree';

// Prop types
const propTypes = {};
const defaultProps = {};
const defaultJson = {
    error: new Error('error'),
    func: () => {
        console.log('test');
    },
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
        },
    ],
};

class MainStage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: Object.assign({}, defaultJson), // _.cloneDeep(defaultJson),
            value: ''
        };
        // Bind
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(event) {
        const inputValue = event.target.value;
        this.setState({
            value: inputValue
        });
        console.log(this.state.value);
    }

    handleSubmit() {
        const {value} = this.state;
        // Get data
        const jsonString = value;

        try {
            const json = JSON.parse(jsonString);
            this.setState({
                json,
                value: ''
            });
        } catch (e) {
            // Nothing
            console.error(e);
        }
    }

    handleReset() {
        this.setState({
            json: Object.assign({}, defaultJson),
            value: ''
        });
    }

    render() {
        const {json} = this.state;
        const style4 = {
            margin: '0 15px',
            minWidth: '200px',
        };
        return (
            <div>
                <div style={style4}>
                    <JsonTree
                        data={json}
                    />
                </div>
                <div style={style4}>
                    <textarea 
                        value={this.state.value}
                        onChange={this.handleChange}
                        rows="15" cols="40" />

                    <div>
                        <button onClick={this.handleSubmit}>Submit</button>
                        <button onClick={this.handleReset}>Default</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainStage;
