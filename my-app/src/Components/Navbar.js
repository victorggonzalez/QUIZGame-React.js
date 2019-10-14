import React from 'react';
import Index from './Index';
import Timer from './Timer';

export default class Navbar extends React.Component{




  render(){
    return(
      <header id="header" className="header">

        <h1><a href="index.html">QUIZ Game</a></h1>
        <h2 style={{color: 'white'}}>Time remaining: {this.props.timer} s</h2>

        <nav id="nav" style={{paddingRight: '1cm'}}>
        <div class="dropdown">
          <span style={{color: 'white'}}>See all the questions</span>
            <div class="dropdown-content" >
              <Index
                  questions={this.props.questions}
                  question={this.props.questions[this.props.currentQuestion]}
                  currentQuestion={this.props.currentQuestion}
                  onChangeQuestion={this.props.onChangeQuestion}
                  score={this.props.score}
                  finished={this.props.finished}
                  timer={this.props.timer}/>
            </div>
        </div>


					</nav>
      </header>

    );
  }


}
