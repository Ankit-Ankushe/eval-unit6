import React from 'react'

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
    <label>NAME:</label>
      <input type="text" placeholder='name' value={name} onChange={(e)=>SetName(e.target.value)}/>
      <label>EMAIL ADDRESS:</label>
      <input type="text" placeholder='email'value={email} onChange={(e)=>SetEmail(e.target.value)}/>
      <label>PASSWORD:</label>
      <input type="text" placeholder='email'value={password} onChange={(e)=>SetPassword(e.target.value)}/>
      <button onClick={handleAdd}>SignUp</button>
    </div>
  )
}

export default SignUp
