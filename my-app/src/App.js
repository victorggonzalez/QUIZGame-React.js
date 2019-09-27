import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {questionAnswer} from './redux/actions';

import Game from './Game.js';


function App(props) {
  console.log(props);

  return (
    <div>
    <Game question={props.questions[props.currentQuestion]}
          onQuestionAnswer={(answer) =>{
            props.dispatch(questionAnswer(props.currentQuestion, answer))
          }} />
    </div>
  );
}

function mapStateToProps(state){
  return{    ...state};
}

export default connect(mapStateToProps)(App);
