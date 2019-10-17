import React from 'react';
import Index from './Index';

export default class Navbar extends React.Component{
  render(){
    return(
      <header id="header" className="header">

        <h1><a href="index.html">QUIZ Game</a></h1>
        <h2 style={{color: 'white'}}>Time remaining: {this.props.timer} s</h2>

        <nav id="nav" style={{paddingRight: '1cm'}}>
        <ul>
        <li><button class="button alt small" style={{ marginRight: '1cm', border: '0px', borderRadius: '50%'}} onClick={ () => {
            return this.props.newQuestions();}}>Reset game</button>
        </li>
        <li><div class="dropdown">
          <span style={{color: 'white'}}>See all the questions</span>
              <Index
                  questions={this.props.questions}
                  question={this.props.questions[this.props.currentQuestion]}
                  currentQuestion={this.props.currentQuestion}
                  onChangeQuestion={this.props.onChangeQuestion}
                  score={this.props.score}
                  finished={this.props.finished}
                  timer={this.props.timer}/>
        </div></li>
        </ul>


					</nav>
      </header>

    );
  }


}
