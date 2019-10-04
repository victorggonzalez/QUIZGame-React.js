import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {questionAnswer} from './redux/actions';
import {changeQuestion} from './redux/actions';
import {initQuestions} from './redux/actions';


import {logo} from './assets/quiz.png';
import list from './assets/list.png';
import Game from './Components/Game.js';
import Navbar from './Components/Navbar.js';
import './assets/css/animation.css';


function mapStateToProps(state){
  return{    ...state};
}

class App extends React.Component {
componentDidMount(){
  let url = "https://quiz.dit.upm.es/api/quizzes/random10wa?token=b61cccee4c3c81170f14"

  fetch(url)
      .then(res => res.json())
      .then(json => {
        this.props.dispatch(initQuestions(json))})
      .catch(error => {
        console.log(error);
      });
}

render(props) {
  console.log(props);
  return (
    <div className="App">
      <Navbar logo ={this.props.logo}
      list ={this.props.list}
      questions={this.props.questions}
      />
      <Game questions={this.props.questions}
          question={this.props.questions[this.props.currentQuestion]}
          currentQuestion={this.props.currentQuestion}
          onQuestionAnswer={(answer) =>{this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))}}
          onChangeQuestion={(nextQuestion)=>{this.props.dispatch(changeQuestion(nextQuestion))}}
          onInitQuestions={(questions)=>this.props.dispatch(initQuestions(this.props.questions))}
           />

    </div>
  );
}


}

export default connect(mapStateToProps)(App);
