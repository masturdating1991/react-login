import React, {useState} from 'react'
import {userLogin} from '../../redux/reducers/auth/auth.thunk'
import {connect} from "react-redux"

function Login({userLogin}) {
    const {state, setState} = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target
        setState({...state, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        userLogin(data)
    }
    return (
        <>
            <div>Please Login</div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}/>
                <button type='submit'>Login</button>
            </form>
        </>

    );
}

export default connect(null, {userLogin})(Login)