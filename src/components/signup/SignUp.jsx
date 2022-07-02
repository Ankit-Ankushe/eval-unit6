import React from 'react'
import { Link } from "react-router-dom"


const SignUp = () => {
    const [name,SetName] = React.useState("")
    const [email,SetEmail] = React.useState("")
    const [password,SetPassword] = React.useState("")

    const handleAdd= ()=>{
        const data={
            name,
            email,
            password
        }
        localStorage.setItem("user",data)
       fetch(`http://localhost:8080/users`,{
        method:"POST",
        body: JSON.stringify(data),
        headers:{
          "content-type": "application/json"
        }
       }).then((res) => res.json())
        .catch((err)=> console.log(err));
    }

  return (
    <div>
      <h1>Sign Up</h1>
    <label>NAME:</label>
      <input type="text" placeholder='name' value={name} onChange={(e)=>SetName(e.target.value)}/>
      <label>EMAIL ADDRESS:</label>
      <input type="text" placeholder='email'value={email} onChange={(e)=>SetEmail(e.target.value)}/>
      <label>PASSWORD:</label>
      <input type="password" placeholder='password'value={password} onChange={(e)=>SetPassword(e.target.value)}/>
      <Link to={`/login`}><button onClick={handleAdd}>Signup</button></Link>
    </div>
  )
}

export default SignUp
