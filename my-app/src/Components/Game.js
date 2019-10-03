import React from 'react';
import Content from './Content';
import Actionbar from './Actionbar';

export default class Game extends React.Component{

  render() {
    return(
      <section id="main" class="container large">

      <div key="Game" className="Game">
        <section className="Content" >
				    <Content question={this.props.question}
					           onQuestionAnswer={this.props.onQuestionAnswer}
                 />
        </section>
        <section className="Actionbar" class="box">
				    <Actionbar question={this.props.question}
                      questions={this.props.questions}
                      currentQuestion={this.props.currentQuestion}
                      onChangeQuestion={this.props.onChangeQuestion}
                      onInitQuestion={this.props.onInitQuestion}
             />
        </section>
			</div>
      </section>

      );
  }
}
