import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardTitle, CardText } from 'react-toolbox/lib/card';

const style = {
  width: '350px',
  marginLeft: '20px',
  marginTop: '20px',
  display: 'inline-block'
};

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  render() {
    if(this.state.hasError) {
      return (
        <Card style={style}>
          <CardMedia
            aspectRatio="wide"
            image="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png"
          />
          <CardTitle
            title="Sorry Something went wrong!!!"
            subtitle="Error catched by error boundary of react 16"
          />
        </Card>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;