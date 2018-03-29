import React from 'react'
import { Icon, Header } from 'semantic-ui-react'

  class Connect extends React.Component {

    handleClick = command => {
      switch(command) {
        case 'github':
          window.open("https://www.github.com/eldibenedetto")
          break;
        case 'instagram':
          window.open("https://www.instagram.com/bksgenemachine")
          break;
        case 'medium':
          window.open("https://medium.com/@eldibenedetto")
          break;
        case 'linkedin':
          window.open("https://www.linkedin.com/in/eldibenedetto")
          break;
        default:
          console.log('Sorry')
        }
      }

    render() {
      return(
        <div className="container">
          <Header inverted size="huge" className="item">Connect</Header>
          <div className="item" >
            <div style={{marginBottom: "2%"}}>
              <Icon link inverted color="blue" bordered name="github square" size="massive" onClick={() => this.handleClick('github')}/>
              <Icon link inverted color="orange" bordered name="instagram" size="massive" onClick={() => this.handleClick('instagram')}/>
            </div>
            <div>
              <Icon link inverted color="orange" bordered name="medium" size="massive" onClick={() => this.handleClick('medium')}/>
              <Icon link inverted color="blue" bordered name="linkedin square" size="massive" onClick={() => this.handleClick('linkedin')}/>
            </div>
          </div>
        </div>
      )
    }
  }

export default Connect
