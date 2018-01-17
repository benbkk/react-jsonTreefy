import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonTree from 'components/JsonTree';
import { flatten, createTree } from 'utils';

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
            json: Object.assign({}, defaultJson),
            value: ''
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
            <div>
                <div style={style4}>
                    <pre>
                        <JsonTree data={json}/>
                    </pre>
                </div>
                <div style={style4}>
                    <textarea 
                        value={this.state.value}
                        onChange={this.handleChange}
                    />

                    <div>
                        <button onClick={this.handleSubmit}>Submit</button>
                        <button onClick={this.handleReset}>Default</button>
                    </div>
                </div>
            </div>
        );
    }

    handleSubmit() {
        const {value} = this.state;
        let json = JSON.parse(value);
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
            json: Object.assign({}, defaultJson),
            value: ''
        });
    }
}

export default MainStage;
