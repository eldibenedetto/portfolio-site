import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return(
      <header>
        <nav>
          <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/connect'>Connect</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
