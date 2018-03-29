import React from 'react';
import { Icon } from 'semantic-ui-react'

class AboutSlideshow extends React.Component {

  state = {
    images: [
      {
        path: 'portfolio_about_movember.jpg',
        caption: 'My family and I raised over $2,000 for prostate cancer research, by growing mustaches for Movember.'
      },
      {
        path: 'portfolio_about_scu.jpg',
        caption: 'I graduated from Santa Clara University in 2010.'
      },
      {
        path: 'portfolio_photo_coach.jpg',
        caption: 'Worked as a substitute teacher at Brooklyn Tech High School for 5 years, but what I enjoyed most during my time there was coaching.'
      },
      {
        path: 'portfolio_about_broadmic.jpg',
        caption: 'Employee #2 at a digital media startup focused on amplifying the voices of female entrepreneurs.'
      },
      {
        path: 'portfolio_about_flatiron.jpg',
        caption: 'Took a 15 week web development immsersive course at Flatiron School in NYC.'
      },
      {
        path: 'portfolio_about_opinions.png',
        caption: "Don't take my word for it. Here's what my peers at Flatiron School had to say about me."
      }
    ],
    photoIndex: 0
  }

  handleClick = command => {
    const  L = this.state.images.length - 1
    let { photoIndex } = this.state
    console.log(photoIndex)
    if (command === 'next') {
      photoIndex = photoIndex === L ? 0 : photoIndex+=1
      this.setState({ photoIndex })
    } else {
      photoIndex = photoIndex === 0 ? L : photoIndex-=1
      this.setState({ photoIndex })
    }
  }

  render() {
    let { images, photoIndex } = this.state
    let image = images[photoIndex]
    let caption = images[photoIndex].caption
    return(
      <div className="item">
        <div className="slideShowContainer">
          <div id="slideWrapper">
            <Icon inverted name="arrow left" link size="huge" onClick={() => this.handleClick('prev')} />
            <div id="aboutSlideshow" style={{marginBottom: "2%"}}>
              <img src={require('../media/' + image.path)} alt={image.path} size='large' id="slide"/>
            </div>
            <Icon inverted name="arrow right" link size="huge" onClick={() => this.handleClick('next')} />
          </div>
          <div className="captions">
            <p>{caption}</p>
          </div>
        </div>
      </div>

    )
  }
}

export default AboutSlideshow
