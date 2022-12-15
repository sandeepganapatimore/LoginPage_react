import React, { useState, createContext, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Routers } from '../Routers'
import { Context } from './Provider'


function Login() {
    // const [form, setForm] = useState({
    //     email: "moresandeep",
    //     password: "1111"
    // })
    const { state, dispatch } = useContext(Context)
    console.log('email state', state.email)

    const navigate = useNavigate()

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // console.log('form', email)/

    // const handleChange = (e) => {
    //     const { value, id } = e.target
    //     setForm((form) => ({
    //         ...form,
    //         [id]: value
    //     }))
    // }
    const handleSubmit = () => {
        localStorage.setItem('users', JSON.stringify(state.email))
        console.log('hello ')
    }
    return (
        <div className='container'>
            <div className='row'>
                {/* <div className='mt-5'> */}
                <form onSubmit={handleSubmit} className='border border-2 rounded border-info  bg-light text-dark form-control' style={{ width: "495px", marginLeft: '394px', marginTop: "100px", height: "550px" }}>


                    <h1 style={{ marginTop: "50px", marginRight: "120px" }} >Log In</h1>
                    <br />
                    {/* <input type='email' placeholder='email' aria-label='Email' size='190' value={state.email} onChange={e => {
                    dispatch({ type: 'email', payload: e.target.value })
                }} id='email' style={{ width: "200px", size: "70px" }} />
                <br /> */}
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" value={state.email} aria-describedby="addon-wrapping" style={{ width: "300px", marginLeft: "69px" }}
                        onChange={e => {
                            dispatch({ type: 'email', payload: e.target.value })
                        }}
                    />

                    <br />
                    <input type="text" class="form-control" value={state.password} placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" style={{ width: "300px", marginLeft: "69px" }}
                        onChange={e => {
                            dispatch({ type: 'password', payload: e.target.value })
                        }}
                    />

                    {/* <input type='password' placeholder='password' value={state.password} onChange={e => {
                    dispatch({ type: 'password', payload: e.target.value })
                }} id='password' /> */}

                    <br />
                    <Link to={Routers.register} id="link">forgot password?</Link>
                    <br />
                    {/* <br /> */}

                    <button type='submit' onClick={() => navigate(Routers.Dash)} id="btn" className='w-50 h-15 btn btn-success text-dark' style={{ margintop: '50px', width: "200px", marginLeft: "-8%" }}>Log In </button>
                    {/* <button onClick={handleSubmit}>Loginrrr </button> */}
                    <br />
                    <br />
                    <br />

                    <p><u>need to sign up</u></p>

                    <Link>Create Account</Link>


                </form>
            </div>
            {/* </div> */}

            <div>
                {/* <emailContext.Provider value={{ email: email }}>
                    <Dashboard />
                </emailContext.Provider> */}
            </div>
        </div>
    )
}

export default Login
