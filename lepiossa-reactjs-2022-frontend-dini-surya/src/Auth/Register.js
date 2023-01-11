import { useContext, useState } from "react"
import {UserContext} from "../Context/UserContext"
import axios from "axios"
import { Form , Input, Button, Checkbox } from 'antd';
import { Link } from "react-router-dom"

const Register = () =>{
  const [, setUser] = useContext(UserContext)
  const [input, setInput] = useState({"username": "", "email": "" , "password": ""})

  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post("https://lepiossa-app-golang.herokuapp.com/register", {
      username: input.username, 
      email: input.email, 
      password: input.password
    }).then(
      (res)=>{
        var user = res.data.user
        var token = res.data.token
        var currentUser = {username: user.username, email: user.email, token }
        setUser(currentUser)
        localStorage.setItem("user", JSON.stringify(currentUser))
      }
    ).catch((err)=>{
      alert(err)
    })
  }

  const handleChange = (event) =>{
    let value = event.target.value
    let name = event.target.name
    setInput({...input, [name]: value})
  }

  return(
    // <>
    //   <div style={{margin: "0 auto", width: "25%", padding: "50px"}}>
    //     <form onSubmit={handleSubmit}>
    //       <label>name: </label>
    //       <input type="text" name="name" onChange={handleChange} value={input.name}/>
    //       <br/>
    //       <label>email: </label>
    //       <input type="email" name="email" onChange={handleChange} value={input.email}/>
    //       <br/>
    //       <label>Password: </label>
    //       <input type="password" name="password" onChange={handleChange} value={input.password}/>
    //       <br/>
    //       <button>Register</button>
    //     </form>
    //   </div>
    // </>




<>
<div className="containerL">
<h1>Register</h1>
<form onSubmit={handleSubmit}>
<label>name: </label>
    <input type="text" name="username" onChange={handleChange} value={input.username}/>
     
  <label>Email</label><br/>
  <input type="email" name="email" onChange={handleChange} value={input.email}/><br/>
 <label>Password</label><br/>
 <input type="password" name="password" onChange={handleChange} value={input.password}/><br/>
 <div style={{textAlign:'center' }}>

  <Button type="primary" htmlType="submit">
  SignUp
  </Button>
  <div style={{ color:"white" }}   >
    Sudah punya akun?  <Link to="/login">LogIn</Link> 
    </div> 
 </div>
           
</form>
</div>




</>
  )
}

export default Register