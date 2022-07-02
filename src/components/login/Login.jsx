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
    const Data = localStorage.getItem('user')
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
  // const Auth =()=>{
  //   const len = Data.length;
  //   console.log("length of data" , len,Data)
  //   if(Data[Data.length-1][1] === email && Data[Data.length-1][2]=== password){
  //     Navigate(`/movies`)
  //   }
  //   else{
  //     alert("wrong password");
  //   }
  // }
  return (
    <div>
      <h1>Login</h1>
      <label>EMAIL ADDRESS:</label>
      <input type="text" placeholder='email'value={email} onChange={(e)=>SetEmail(e.target.value)}/>
      <label>PASSWORD:</label>
      <input type="password" placeholder='Password'value={password} onChange={(e)=>SetPassword(e.target.value)}/>
      <Link to={`/movies`}> <button onClick={auth}>Login</button></Link>
    </div>
  )
}

export default Login
