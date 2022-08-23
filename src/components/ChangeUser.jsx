import { useState, useEffect, useContext } from "react";
import { fetchUsers } from "../api functions/api";
import { UserContext } from "../context/User";

const ChangeUser = () => {

    const [users, setUsers] = useState([])
    const {setLoggedInUser} = useContext(UserContext)

    useEffect(() => {
        fetchUsers().then((usersFromApi) => {
            setUsers(usersFromApi.data.users)
        })
    }, []);

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