import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import { setUser } from '../app/userSlice'

export default function CreateUserForm({changeStatus}){

    const dispatch = useDispatch()
    const { handleSubmit } = useForm();

    const [username, changeUsername] = useState('')
    const [password, changePassword] = useState('')

    const onSubmit = async () => {

        await fetch(`http://localhost:3434/user/register`, {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response=>response.json())
        .then(data=> {
            if (data){
                dispatch(setUser({
                    username: username,
                    password: password
                }))
                changeStatus(true)
            }
        })
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-head">Register</div>
                <label className="form-label">
                    Choose a Username:
                    <input type="text" className="form-input" placeholder="Username" value={username} onChange={(evt)=>changeUsername(evt.target.value)} />
                </label>
                <label className="form-label">
                    Choose a Password:
                    <input type="password" className="form-input" placeholder="Password" value={password} onChange={(evt)=>changePassword(evt.target.value)} />
                </label>
                <input type="submit" value="Submit" className="form-submit" />
            </form>
            <button className="redirect-button" onClick={()=>changeStatus(true)}>Have an account? Sign in!</button>
        </div>
    )
}