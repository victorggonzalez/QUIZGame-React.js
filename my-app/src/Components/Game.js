import React from 'react';
import Content from './Content';
import Actionbar from './Actionbar';
import Index from './Index';
import Timer from './Timer';


export default class Game extends React.Component{

  render() {
    return(
      <div id="main">
      <div key="Game" className="Game">
      <aside key="Timer" className="Timer" style={{float: 'left'}}>
        <Timer timer={this.props.timer}/>
      </aside>
      <aside key="Index" className="Index" style={{float: 'right'}}>
        <Index questions={this.props.questions}
              onChangeQuestion={this.props.onChangeQuestion}/>
      </aside>
      <section className="Content" class="container">
				    <Content question={this.props.question}
                    questions={this.props.questions}
                    currentQuestion={this.props.currentQuestion}
					          onQuestionAnswer={this.props.onQuestionAnswer}
                    />
      </section>
      <section className="Actionbar" class="container small">
				    <Actionbar question={this.props.question}
                      questions={this.props.questions}
                      currentQuestion={this.props.currentQuestion}
                      onChangeQuestion={this.props.onChangeQuestion}
                      onInitQuestion={this.props.onInitQuestion}
                      onSubmit={this.props.onSubmit}
                     score={this.props.score}
                      finished={this.props.finished}

             />
      </section>





			 </div>
      </div>

      );
  }
}
