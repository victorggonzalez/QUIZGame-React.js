import React from 'react';
export default class Timer extends React.Component {


    render() {
      return(
        <div>
        <h1>Time remaining:</h1>
					<h1>{this.props.timer} seconds.</h1>
				</div>
      )
    }
}
