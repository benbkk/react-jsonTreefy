import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundaries extends Component {
    static propTypes = {
        children: PropTypes.node,
    }

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      console.log(error, info);
    }

    render() {
        if(this.state.hasError) {
            return (
                <h1>Oops... Something went wrong</h1>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundaries;