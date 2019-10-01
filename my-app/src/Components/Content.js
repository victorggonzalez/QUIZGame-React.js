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
            <Question question={this.props.question} text-align="center"/>

            <Answer question={this.props.question}
                    onQuestionAnswer={this.props.onQuestionAnswer}
            />


          </div>

          <div class="col-4">
            <div  key="Image" className="Image">
              <span class="image fit">
                <img src={this.props.question.attachment.url} />
              </span>
            </div>
          </div>
          <div class ="col-4">
              <ul>
                <Tips question={this.props.question}/>
                <h1><li>Author name: {this.props.question.author.username}</li></h1>
                    <span class="image right">
                      <img src={this.props.question.author.photo.url} width="150"/>
                      </span>
                </ul>
        </div>
        </div>
        </section>

    );
  }


}
