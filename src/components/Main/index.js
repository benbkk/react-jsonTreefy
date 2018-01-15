import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonTree from 'components/JsonTree';
import { flatten, reorderItems } from 'utils';
import merge from 'deepmerge';

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
                    <JsonTree
                        data={json}
                    />
                    </pre>
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

    handleSubmit() {
        const {value} = this.state;
        // Get data
        const jsonString = value;
        let json = JSON.parse(jsonString);
        json = flatten(Object.values(json));
        let books = Object.assign([], json);
        let children = books.map(parent => {
            return {
                id: parent.id,
                children: books.filter(book => book.parent_id === parent.id)
            }    
        });
        console.log(children);
        console.log(json);
    

        function extend(obj, src) {
            Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
            return obj;
        }
        

        try {
            this.setState({
                json,
                value: ''
            });
        } catch (e) {
            // Nothing
            console.error(e);
        }
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
