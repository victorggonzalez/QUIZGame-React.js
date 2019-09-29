import React from 'react';
import Content from './Content';
import Actionbar from './Actionbar';

export default class Game extends React.Component{

  render() {
    return(
      <section id="main" class="container large">
      <header>
      <h3>LETS PLAY!</h3>
      </header>
      <div key="Game" className="Game">
        <section className="Content" >
				    <Content question={this.props.question}
					       onQuestionAnswer={this.props.onQuestionAnswer}/>
        </section>
        <section className="Actionbar" class="box">
				    <Actionbar question={this.props.question}/>
        </section>
			</div>
      </section>

      );
  }
}
