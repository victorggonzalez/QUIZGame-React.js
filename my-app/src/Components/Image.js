import React from 'react'

export default class Image extends React.Component {
    render(){
        return(


              <div>
              <div key="Image" className="Image">
                <span class="image fit" width="150">
                  <img src={this.props.question.attachment.url} style={{width: '100%'}} alt="Imagen de la pregunta"/>
                </span>
              </div>
              </div>

        )
    }
}
