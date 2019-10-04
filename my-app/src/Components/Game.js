import React from 'react';
import Content from './Content';
import Actionbar from './Actionbar';
import Index from './Index';

export default class Game extends React.Component{

  render() {
    return(
      <div id="main">
      <div key="Index" className="Index" class="row" style={{float: 'right'}}>
        <Index questions={this.props.questions}
              onChangeQuestion={this.props.onChangeQuestion}/>
      </div>
      <div key="Game" className="Game">
          <section className="Content" class="container">
				    <Content question={this.props.question}
					           onQuestionAnswer={this.props.onQuestionAnswer}
                 />
          </section>
          <section className="Actionbar" class="container small">
				    <Actionbar question={this.props.question}
                      questions={this.props.questions}
                      currentQuestion={this.props.currentQuestion}
                      onChangeQuestion={this.props.onChangeQuestion}
                      onInitQuestions={this.props.onInitQuestions}


             />
          </section>
			 </div>
      </div>

      );
  }
}
