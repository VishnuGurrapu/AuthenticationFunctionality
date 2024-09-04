import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="con">
    <ul className="list">
      <li className="listItem">
        <Link to="/">
          <a href="/">Home</a>
        </Link>
      </li>

      <li className="listItem">
        <Link to="/about">
          <a href="/about">About</a>
        </Link>
      </li>
    </ul>
  </div>
)

export default withRouter(Header)
