import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Header extends React.Component {

  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
     this.props.history.push('/' + name)
  }

  render() {

    const { activeItem } = this.state

    return(
      <div style={{backgroundColor: "black"}}>
        <Menu inverted secondary pointing size="massive">
          <Menu.Item name="" onClick={this.handleItemClick} header>Eugene Lee DiBenedetto</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="about"
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
              >About
            </Menu.Item>
            <Menu.Item
              name="projects"
              active={activeItem === 'projects'}
              onClick={this.handleItemClick}
              >Projects
            </Menu.Item>
            <Menu.Item
              name="connect"
              active={activeItem === 'connect'}
              onClick={this.handleItemClick}
              >Connect
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(Header)
