import React from 'react';
import Image from './Image';
import Question from './Question';
import Answer from './Answer';
import Tips from './Tips';


export default class Content extends React.Component{



  render(){
    return(
        <section class="box">
        <div class="row">
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
                   // score={this.props.score}
            />
            </div>
          </div>
          <div class="col-4">
            <Image question={this.props.question}/>
          </div>

          <div class="col-4">
              <ul>
                <Tips question={this.props.question}/>
                <h1>Author name: {this.props.question.author.username}</h1>
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
