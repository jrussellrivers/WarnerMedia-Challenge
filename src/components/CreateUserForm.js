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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Choose a Username:
                    <input type="text" value={username} onChange={(evt)=>changeUsername(evt.target.value)} />
                </label>
                <label>
                    Choose a Password:
                    <input type="password" value={password} onChange={(evt)=>changePassword(evt.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <button onClick={()=>changeStatus(true)}>Have an account? Sign in!</button>
        </div>
    )
}