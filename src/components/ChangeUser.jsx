import { useState, useEffect, useContext } from "react";
import { fetchUsers } from "../api functions/api";
import { UserContext } from "../context/User";
import ErrorComponent from "./ErrorComponent";

const ChangeUser = () => {

    const [users, setUsers] = useState([])
    const {setLoggedInUser} = useContext(UserContext)
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers().then((usersFromApi) => {
            setUsers(usersFromApi.data.users)
        })
        .catch((err) => {
            setError({err});
        })
    }, []);

    if (error) {
        return <ErrorComponent status={error.err.response.status} message={error.err.response.data.msg}/>
    }
    
    return (

        <>
        <h2>Select a user below:</h2>
        <section>
            <ul className="user--list">
                {users.map((user) => {
                    return (
                        <li className="user--card" key={user.username}>
                            <h2 className="user_card--name">{user.username}</h2>
                            <img
                            className="user_card--img"
                            src={user.avatar_url}
                            alt={user.username}
                            />
                            <br />
                            <button
                            className="user_card--button"
                            onClick={() => {
                            setLoggedInUser(user);
                            }}>
                            Select User
                            </button>
                        </li>
                    )
                })}
            </ul>
        </section>
        </>
    )

}

export default ChangeUser;