import React, { useState } from 'react'
import '../Style/authentication.css'
import { TextField, Button } from '@mui/material'
import { setAuth } from '../Store/auth'
import { useDispatch } from 'react-redux'
import Axios from 'axios'

const Authentication = () => {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        dispatch(setAuth(true))
        // Axios.post(``)
    }

    return (
        <div className='login'>
            <div className='text-center'>
                <h1>Quicreds</h1>
                <h3>Login</h3>
            </div>
            <TextField value={userName} onChange={(e) => setUserName(e.target.value)} variant='standard' size='small' label="Username" />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} variant='standard' size='small' type='password' label="Password" />
            <Button variant="contained"
                onClick={login}
                sx={{
                    marginTop: '10px',
                }}>Login</Button>
        </div>
    )
}

export default Authentication