import React from 'react';
export default class Timer extends React.Component {


    render() {
      return(
        <h1>Time remaining: {this.props.timer} seconds.</h1>

      )
    }
}
