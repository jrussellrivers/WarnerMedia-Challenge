import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import { fetchUser } from '../app/userSlice'

export default function UserForm({changeStatus}){

    const dispatch = useDispatch()
    const { handleSubmit } = useForm();

    const [username, changeUsername] = useState('')
    const [password, changePassword] = useState('')

    const onSubmit = () => {
        dispatch(fetchUser({
            username: username,
            password: password
        }))
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Enter Your Username:
                    <input type="text" value={username} onChange={(evt)=>changeUsername(evt.target.value)} />
                </label>
                <label>
                    Enter Your Password:
                    <input type="password" value={password} onChange={(evt)=>changePassword(evt.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <button onClick={()=>changeStatus(false)}>Don't have an account? Register!</button>
        </div>
    )
}