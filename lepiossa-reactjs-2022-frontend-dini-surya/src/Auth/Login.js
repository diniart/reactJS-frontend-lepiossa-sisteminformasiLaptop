import { useContext, useState } from "react"
import {UserContext} from "../Context/UserContext"
import axios from "axios"
import { Form , Input, Button, Checkbox } from 'antd';
import { Link } from "react-router-dom"

const Login = () =>{
  const [user, setUser] = useContext(UserContext)
  const [input, setInput] = useState({username: "" , password: ""})

  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post("https://lepiossa-app-golang.herokuapp.com/login", {
      username: input.username, 
      password: input.password
    }).then(
      (res)=>{
        var user = res.data.user
        var token = res.data.token
        var currentUser = {username: user.username, password: user.password, token }
        setUser(currentUser)
        localStorage.setItem("user", JSON.stringify(currentUser))
      }
    ).catch((err)=>{
      alert(JSON.stringify(err.response.data))
    })
  }

  const handleChange = (event) =>{
    let value = event.target.value
    let name = event.target.name
    setInput({...input, [name]: value})
  }


  return(




    <>
    <div className="containerL">
    <h1 style={{textAlign:'center', textStyle:'bold' }}>Login</h1>
    <form onSubmit={handleSubmit}>
      <label>Username</label><br/>
      <input type="text" name="username" onChange={handleChange} value={input.username}/><br/>
     <label>Password</label><br/>
     <input type="password" name="password" onChange={handleChange} value={input.password}/><br/>
     <div style={{textAlign:'center' }}>

      <Button type="primary" htmlType="submit" style={{ fontSize:"14px"}}>
           Login
      </Button>
      <br/>

     
      <div style={{ color:"white" }}   >
        belum punya akun?  <Link to="/register">Register</Link> 
     </div>
        </div> 
               
    </form>
    </div>



   
    </>







        // <>
      

        //   <div style={{margin: "0 auto", width: "25%", padding: "50px"}}>
        //     <form onSubmit={handleSubmit}>
        //       <label>Email: </label>
        //       <input type="email" name="email" onChange={handleChange} value={input.email}/>
        //       <br/>
        //       <label>Password: </label>
        //       <input type="password" name="password" onChange={handleChange} value={input.password}/>
        //       <br/>
        //       <Button type="primary" htmlType="submit">
        //       Login
        //     </Button>
        //     </form>
        //   </div>
        // </>









   

  )
}

export default Login