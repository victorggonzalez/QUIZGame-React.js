import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {questionAnswer} from './redux/actions';
import {changeQuestion} from './redux/actions';


import logo from './assets/quiz.png';
import list from './assets/list.png';
import Game from './Components/Game.js';
import Navbar from './Components/Navbar.js';
import './assets/css/animation.css';


function App(props) {
  console.log(props);
  console.log(logo);

  return (
    <div>
      <Navbar logo={props.logo}
              list={props.list}/>
      <Game questions={props.questions}
          question={props.questions[props.currentQuestion]}
          currentQuestion={props.currentQuestion}
          onQuestionAnswer={(answer) =>{props.dispatch(questionAnswer(props.currentQuestion, answer))}}
          onChangeQuestion={(nextQuestion)=>{props.dispatch(changeQuestion(nextQuestion))
              }}
           />

    </div>
  );
}

function mapStateToProps(state){
  return{    ...state};
}

export default connect(mapStateToProps)(App);
