import React from 'react';
import Content from './Content';
import Actionbar from './Actionbar';
import Index from './Index';
import Timer from './Timer';


export default class Game extends React.Component{

  render() {
    return(
      <div id="main" style={{paddingBottom: '0cm'}}>
      <div key="Game" className="Game">
      <aside key="Timer" className="Timer" style={{float: 'left'}}>
        <Timer timer={this.props.timer}/>
      </aside>
      <section className="Content" class="container">
				    <Content question={this.props.question}
                    questions={this.props.questions}
                    currentQuestion={this.props.currentQuestion}
					          onQuestionAnswer={this.props.onQuestionAnswer}
                    finished={this.props.finished}
                    />
      </section>
      <section className="Actionbar" class="container small">
				    <Actionbar question={this.props.question}
                      questions={this.props.questions}
                      currentQuestion={this.props.currentQuestion}
                      onChangeQuestion={this.props.onChangeQuestion}
                      onResetQuestion={this.props.onInitQuestion}
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
