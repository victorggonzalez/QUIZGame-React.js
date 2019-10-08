import React from 'react';
import Button from './Button';



export default class Actionbar extends React.Component{


  constructor(props){
		super(props);

	}

  newQuestions(){
    let url = "https://quiz.dit.upm.es/api/quizzes/random10wa?token=b61cccee4c3c81170f14"

    fetch(url)
        .then(res => res.json())
        .then(json => {
          this.props.dispatch(this.props.onInitQuestions(json))})
        .catch(error => {
          console.log(error);
        });
  }


  render(){
    return(
      <div class="box">
      <div key="Actionbar" className="Actionbar" class="row">
        <div class="col-4">
            <Button buttonName="Previous" currentQuestion={this.props.currentQuestion} function={ () => {
						if (this.props.currentQuestion!==0){
							return this.props.onChangeQuestion(this.props.currentQuestion-1);
						}else{
							return;
						}}}/>
        </div>
        <div class="col-4">
			     <Button buttonName="Submit" questions={this.props.questions} finished={this.props.finished}function={ () => {
            
            return this.props.onSubmit(this.props.questions);
            }}/>
           
        </div>
        <div class="col-4">
          <Button buttonName="Next" currentQuestion={this.props.currentQuestion}   function={ () => {
						if (this.props.currentQuestion === (this.props.questions.length-1)){
							return;
						}else{
							return this.props.onChangeQuestion(this.props.currentQuestion+1);
						}}}/>
        </div>
        <h2>Puntuacion:{this.props.score}</h2>
        
      </div>
      <div class="row">
      <p/>
      <Button buttonName="Reset"    function={ () => {
          return this.props.onResetQuestions(); }}
          />

      </div>
      </div>



  			);
  	}
  }
