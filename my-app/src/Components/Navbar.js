import React from 'react';

export default class Navbar extends React.Component{


function(){
  return this.props.onInitQuestions();
}

  render(){
    return(
      <header id="header" className="header">

        <h1><a href="index.html">QUIZ Game</a></h1>
        <nav id="nav">
						<ul>
							<li style={{whiteSpace: 'nowrap'}}><a href="index.html">Home</a></li>
							<li class="opener" style={{userSelect: 'none'}, {cursor: 'pointer'}, {whiteSpace: 'nowrap'},{opacity: '1'}}>
								<a href="#" class="icon solid fa-angle-down">Layouts</a>

							<ul class="" style={{userSelect: 'none'},{display: 'none'},{position: 'absolute'}}>
									<li style={{whiteSpace: 'nowrap'}}><a href="generic.html" style={{display: 'block'}}>Generic</a></li>
									<li style={{whiteSpace: 'nowrap'}}><a href="contact.html" style={{display: 'block'}}>Contact</a></li>
									<li style={{whiteSpace: 'nowrap'}}><a href="elements.html" style={{display: 'block'}}>Elements</a></li>
									<li class="opener" style={{userSelect: 'none'},{cursor: 'pointer'},{whiteSpace: 'nowrap'}}>
										<a href="#" style={{display: 'block'}}>Submenu</a>
										<ul class="dropotron" style={{userSelect: 'none'},{display: 'none'},{position: 'absolute'}}>
											<li style={{whiteSpace: 'nowrap'}}><a href="#" style={{display: 'block'}}>Option One</a></li>
											<li style={{whiteSpace: 'nowrap'}}><a href="#" style={{display: 'block'}}>Option Two</a></li>
											<li style={{whiteSpace: 'nowrap'}}><a href="#" style={{display: 'block'}}>Option Three</a></li>
											<li style={{whiteSpace: 'nowrap'}}><a href="#" style={{display: 'block'}}>Option Four</a></li>
										</ul>
									</li>
								</ul></li>
							<li style={{whiteSpace: 'nowrap'}}><a href="#" class="button">Sign Up</a></li>
						</ul>
					</nav>
      </header>

    );
  }


}
