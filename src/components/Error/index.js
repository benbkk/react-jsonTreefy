import React, { Component } from 'react';


class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    componentDidCatch() {
        
    }
}