import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routers } from "../Routers";



function Register() {
  const navigate = useNavigate() // useNavigate is the hook 

  const [form, setForm] = useState({
    Name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { value, id, name } = e.target
    setForm((form) => ({
      ...form,
      [name]: value
    }))
  }

  // to store value in local storage.....

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate(Routers.login)
  }

  return (
    <div className="border border-2 border-primary rounded-top rounded-end " style={{ width: '1100px', height: "610px", marginLeft: "350px", marginTop: "100px" }}>
      <br />
      <br />
      <br />
      <div className="p-5 bg-primary text-white text-center rounded-pill"
        style={{
          width: '750px',
          marginLeft: '15%',
          marginTop: "20px"
        }}>
        <h1>Create your Account</h1>
      </div>
      <br />
      <br />


      <form onSubmit={handlesubmit} >
        <div style={{ marginLeft: "360px" }}>

          <div className="input-group  ">
            <span className="input-group-text" style={{ marginRight: "30px" }}>Name</span>
            <input type='text' value={form.Name} onChange={(e) => handleChange(e)} name="name" style={{ marginLeft: "16px" }} />
            <br />
          </div>
          <br />
          <div className="input-group ">
            <span className="input-group-text mb-2" style={{ marginRight: "30px" }}>Email  </span>
            <input type='email' value={form.email} onChange={(e) => handleChange(e)} name="email" style={{ marginLeft: "17px" }} />
            <br />
            <br />
          </div>

          <br />
          <div className="input-group ">
            <span className="input-group-text" style={{ marginRight: "20px" }}>Password </span>
            <input type='password' value={form.password} onChange={(e) => handleChange(e)} name="password" />
            <br />
          </div>
          {/* <Link to={RouterLink.dashboard}> <button>Login</button></Link> */}
          <br />
          <br />
        </div>

        <button className="w-25 h-15 btn btn-secondary" >Register</button>


      </form >

    </div>


  )
}

export default Register