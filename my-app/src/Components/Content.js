import React from 'react';
import Image from './Image';
import Question from './Question';
import Answer from './Answer';
import Tips from './Tips';
import Check from './Check';


export default class Content extends React.Component{


  render(){
    return(
        <section class="box">
        <div class="row" style={{height: '40vh'}}>
          <div class="col-4">
            <div class="row">
            <Question question={this.props.question}
                      currentQuestion={this.props.currentQuestion}
                      questions={this.props.questions}/>
            </div>
            <p/>
            <div class="row">
            <Answer question={this.props.question}
                    currentQuestion={this.props.currentQuestion}
                    onQuestionAnswer={this.props.onQuestionAnswer}
                    finished={this.props.finished}
            />
            <Check question={this.props.question}
                  currentQuestion={this.props.currentQuestion}
            finished={this.props.finished}/>
            </div>
          </div>
          <div class="col-4" >
            <Image question={this.props.question}/>
          </div>

          <div class="col-4">
              <ul>
                <Tips question={this.props.question}/>
                <h1>Created by: {this.props.question.author.username}</h1>
                    <span class="image">
                      <img src={this.props.question.author.photo.url} width="150" alt="Imagen"/>
                      </span>
                </ul>
        </div>
        </div>
        </section>

    );
  }


}
