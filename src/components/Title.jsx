import { useContext } from "react";
import { UserContext } from "../context/User";

const Title = () => {

    const {loggedInUser} = useContext(UserContext)
    
    return (
        <div className="title--body">
            <h1 className="title--title">W.T.A.N.</h1>
            <p className="title--username">{`Hello, ${loggedInUser.username}!`}</p>
        </div>
    )
}

export default Title;