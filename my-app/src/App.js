import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {questionAnswer} from './redux/actions';
import {changeQuestion} from './redux/actions';
import {initQuestions} from './redux/actions';


import logo from './assets/quiz.png';
import list from './assets/list.png';
import Game from './Components/Game.js';
import Navbar from './Components/Navbar.js';
import './assets/css/animation.css';


function App(props) {
  console.log(props);

  return (
    <div>
      <Navbar/>
      <Game questions={props.questions}
          question={props.questions[props.currentQuestion]}
          currentQuestion={props.currentQuestion}
          onQuestionAnswer={(answer) =>{props.dispatch(questionAnswer(props.currentQuestion, answer))}}
          onChangeQuestion={(nextQuestion)=>{props.dispatch(changeQuestion(nextQuestion))}}
          onInitQuestions={(questions)=>props.dispatch(initQuestions(props.questions))}
           />

    </div>
  );
}

function mapStateToProps(state){
  return{    ...state};
}

export default connect(mapStateToProps)(App);
