import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
    const [email,SetEmail] = React.useState("")
    const [password,SetPassword] = React.useState("")
    const [data,setData] = React.useState("")

    const Navigate = useNavigate();
    const handleLog= () =>{
        fetch(`http://localhost:8080/users`)
  .then((res)=>res.json())
  .then((res) => setData(res))
  .catch((err)=> console.log(err))
  auth();
    }
  const auth =()=>{
    const len = data.length;
    console.log("length of data" , len)
    if(data[data.length-1].email === email && data[data.length-1].password === password){
      Navigate(`/movies`)
    }
    else{
      alert("wrong password");
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <label>EMAIL ADDRESS:</label>
      <input type="text" placeholder='email'value={email} onChange={(e)=>SetEmail(e.target.value)}/>
      <label>PASSWORD:</label>
      <input type="password" placeholder='Password'value={password} onChange={(e)=>SetPassword(e.target.value)}/>
      <button onClick={handleLog}>Login</button>
    </div>
  )
}

export default Login
