import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';


function App(props) {


  console.log(props.questions);
  return (<div>hola </div>
  );
}

function mapStateToProps(state){
  return{    ...state};
}

export default connect(mapStateToProps)(App);
