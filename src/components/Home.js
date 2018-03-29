import React from 'react'
import { Image } from 'semantic-ui-react'

  class Home extends React.Component {

    render() {
      return(
        <div id="profileContainer">
          <Image id='profilePic' src={require('../media/ProfilePic copy.png')} size='large'/>
          <div id="welcome">
            <p style={{fontSize: "1.2em"}}>Hi my name is Eugene, and I am a Full Stack Developer/Software Engineer</p>
          </div>
        </div>
      )
    }
  }

export default Home
