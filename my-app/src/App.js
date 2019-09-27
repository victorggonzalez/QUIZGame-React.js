import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

import Game from './Game.js';


function App(props) {


  console.log(props);
  return (
    <div className="App">
    <Game question={props.questions[props.currentQuestion]}/>
    </div>
  );
}

function mapStateToProps(state){
  return{    ...state};
}

export default connect(mapStateToProps)(App);
