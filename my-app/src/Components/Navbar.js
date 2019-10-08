import React from 'react';
import Index from './Index';

export default class Navbar extends React.Component{




  render(){
    return(
      <header id="header" className="header">

        <h1><a href="index.html">QUIZ Game</a></h1>
        <nav id="nav" style={{paddingRight: '1cm'}}>
        <div class="dropdown">
          <span style={{color: 'white'}}>See all the questions</span>
            <div class="dropdown-content" >
              <Index/>
            </div>
        </div>


					</nav>
      </header>

    );
  }


}
