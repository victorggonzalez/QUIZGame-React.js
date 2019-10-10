import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {questionAnswer, changeQuestion, initQuestions, submit, timer} from './redux/actions';




import Game from './Components/Game.js';
import Navbar from './Components/Navbar.js';
import Button from './Components/Button.js';


function mapStateToProps(state){
  return{    ...state};
}


class App extends Component{

  constructor(props){
    super(props);

  }
  componentDidMount(props) {
    let url = "https://quiz.dit.upm.es/api/quizzes/random10wa?token=b61cccee4c3c81170f14";

    fetch(url)
        .then(res => res.json())
        .then(json => {
          this.props.dispatch(initQuestions(json))})
        .catch(error => {
          console.log(error);
        });

        var interval = setInterval(() =>{
          if (this.props.timer === 0){
            return 0;
          }
          this.props.dispatch(timer(this.props.timer-1));
          },1000);

  }

  newQuestions(){
    let url = "https://quiz.dit.upm.es/api/quizzes/random10wa?token=b61cccee4c3c81170f14"

    fetch(url)
        .then(res => res.json())
        .then(json => {
          this.props.dispatch(initQuestions(json))})
        .catch(error => {
          console.log(error);
        });
  }

  render(){
  console.log(this.props);

  //Comprueba que el array de preguntas esta completo, y en caso contrario muestra un gif de carga
  let game = (this.props.questions.length == 10) ?
  <Game questions={this.props.questions}
      question={this.props.questions[this.props.currentQuestion]}
      currentQuestion={this.props.currentQuestion}
      onQuestionAnswer={(answer) =>{this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))}}
      onChangeQuestion={(nextQuestion)=>{this.props.dispatch(changeQuestion(nextQuestion))}}
      onInitQuestions={() => {this.newQuestions()}}
      onResetQuestions={() => {this.newQuestions()}}

      onSubmit={(questions)=>this.props.dispatch(submit(questions))}
      score={this.props.score}
      finished={this.props.finished}
      timer={this.props.timer} /> : <img src="https://www.freeiconspng.com/uploads/spinner-icon-0.gif"  alt="Funny image" class="error"/>

  return (
    <div className="App">
      <Navbar questions={this.props.questions}
          question={this.props.questions[this.props.currentQuestion]}
          currentQuestion={this.props.currentQuestion}
          onChangeQuestion={(nextQuestion)=>{this.props.dispatch(changeQuestion(nextQuestion))}}
          score={this.props.score}
          finished={this.props.finished}
      />
      {game}
      <footer>
      <Button buttonName="Reset" class="resetButton" function={ () => {
          return this.newQuestions();}}
          />
      </footer>
    </div>
  );
}
}




export default connect(mapStateToProps)(App);
