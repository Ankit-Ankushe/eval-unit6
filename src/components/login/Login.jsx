import React from 'react'

const Login = () => {
    const [email,SetEmail] = React.useState("")
    const [password,SetPassword] = React.useState("")
    const [data,setData] = React.useState("")

    const handleLog= () =>{
        fetch(`http://localhost:8080/users`)
  .then((res)=>res.json())
  .then((res) => setData(res))
  .catch((err)=> console.log(err))
    }
    if(data.email === email && data.password === password){
    }
  return (
    <div>
      <label>EMAIL ADDRESS:</label>
      <input type="text" placeholder='email'value={email} onChange={(e)=>SetEmail(e.target.value)}/>
      <label>PASSWORD:</label>
      <input type="text" placeholder='email'value={password} onChange={(e)=>SetPassword(e.target.value)}/>
      <button onClick={handleLog}>Login</button>
    </div>
  )
}

export default Login
