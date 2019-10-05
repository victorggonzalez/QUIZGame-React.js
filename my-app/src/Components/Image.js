import React from 'react'

export default class Image extends React.Component {
    render(){
        return(


              <div>
              <div key="Image" className="Image">
                <span class="image fit" width="150">
                  <img src={this.props.question.attachment.url} alt="Imagen de la pregunta"/>
                </span>
              </div>
              </div>

        )
    }
}
