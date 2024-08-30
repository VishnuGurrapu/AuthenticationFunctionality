import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => {
  return (
    <div className="con">
      <ul className="list">
        <li className="listItem">
          <Link to="/">
            <a>Home</a>
          </Link>
        </li>

        <li className="listItem">
          <Link to="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Header)
