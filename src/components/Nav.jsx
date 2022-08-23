import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/topics">Topics</Link>
        </nav>
    )
}

export default Nav