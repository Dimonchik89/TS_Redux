import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { fetchUsers } from "../store/action-creators/user";
import { useActions } from "../hooks/useAction";

const UserList: React.FC = () => {
    const { users, loading, error } = useTypedSelector(state => state.user);
    const { fetchUsers } = useActions()

    useEffect(() => {
        // dispatch(fetchUsers())
        fetchUsers()
    }, [])

    if(loading) {
        return <h1>Идет загрузка</h1>
    }

    if(error) {
        return <h1>Произошла ошибка</h1>
    }

    return (
        <>
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </>
    )
}
export default UserList