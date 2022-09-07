import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <nav className="nav--bar">
            <Link className="nav--link--home" to="/">Home</Link>
            <Link className="nav--link--users" to="/users">Users</Link>
            <Link className="nav--link--articles" to="/articles">Articles</Link>
            <Link className="nav--link--topics" to="/topics">Topics</Link>
        </nav>
    )
}

export default Nav