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
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-head">Login</div>
                <label className="form-label">
                    Enter Your Username:
                    <input type="text" className="form-input" placeholder="Username" value={username} onChange={(evt)=>changeUsername(evt.target.value)} />
                </label>
                <label className="form-label">
                    Enter Your Password:
                    <input type="password" className="form-input" placeholder="Password" value={password} onChange={(evt)=>changePassword(evt.target.value)} />
                </label>
                <input type="submit" value="Submit" className="form-submit"/>
            </form>
            <button className="redirect-button" onClick={()=>changeStatus(false)}>Don't have an account? Register!</button>
        </div>
    )
}