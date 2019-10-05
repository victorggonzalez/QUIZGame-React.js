import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {questionAnswer} from './redux/actions';
import {changeQuestion} from './redux/actions';
import {initQuestions} from './redux/actions';
import {timer} from './redux/actions';


import Game from './Components/Game.js';
import Navbar from './Components/Navbar.js';


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

      var interval = setInterval(() =>{
            this.props.dispatch(timer(this.props.timer-1));
            if (this.props.timer===0){
                return;
            }

        },1000);

}


render(props) {

  console.log(props);
  //Comprueba que el array de preguntas esta completo
  let game = (this.props.questions.length == 10) ?
  <Game questions={this.props.questions}
      question={this.props.questions[this.props.currentQuestion]}
      currentQuestion={this.props.currentQuestion}
      onQuestionAnswer={(answer) =>{this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))}}
      onChangeQuestion={(nextQuestion)=>{this.props.dispatch(changeQuestion(nextQuestion))}}
      onInitQuestions={(questions)=>this.props.dispatch(initQuestions(this.props.questions))}
      onResetQuestions={(questions)=>this.props.dispatch(initQuestions(this.props.questions))}
      timer={this.props.timer}
       /> : <h2>ERROR! Not enough questions</h2>
  return (
    <div className="App">
      <Navbar questions={this.props.questions}
      />
      {game}
    </div>
  );
}


}

export default connect(mapStateToProps)(App);
