
import {UserContext} from "../Context/UserContext"
import axios from "axios"
import { Form , Input, Button, Checkbox } from 'antd';
import { Link } from "react-router-dom"
import {useContext, useEffect, useState} from "react"
import { useHistory, useParams } from "react-router-dom"

import userEvent from "@testing-library/user-event";



const Profil=()=>{
   
  let history = useHistory();
  const [user, setUser] = useState()
  const [currentUser, setCurrentUser] = useContext(UserContext)
  const {id} = useParams()
  useEffect(()=>{ 
    const fetchData = async () => {
      const resultLaptop = await axios.get(`https://lepiossa-app-golang.herokuapp.com/user/profil`,{headers: {"Authorization" : "Bearer "+ currentUser.token}})
      let {userName,email, password} = resultLaptop.data.data

     
console.log(resultLaptop)
      

    setCurrentUser({userName, email, password})
   

    
      
    }
    console.log(id)
  
      fetchData()
  
  },[])


  return (
    <>
    <h2 style={{textAlign:'center' }} >Profil User</h2>

<div className="containerF">



  <div style={{backgroundColor:"white", width:"500px", height:"570px", margin:"auto"}}>
   

  <div style={{backgroundColor:"Azure", width:"100px", height:"120px", margin:"auto", paddingTop:"30px", paddingBottom:"50px"}}>   
  <i class="fa fa-user-circle fa-7x" style={{alignItems:"center" }}></i>
    </div>

  <div style={{backgroundColor:"white",  height:"450px", paddingTop:"65px" }}>
    <div style={{backgroundColor:"Azure", textAlign:"left", paddingLeft:"40px", paddingRight:"40px"}}>
<pre>
<br/><br/>
  <br/>

    <p>Username    :    {currentUser.userName}</p><br/>
    <p>Email           :    {currentUser.email}</p><br/>
    <p>Password    :    {currentUser.password}</p><br/>
</pre>

    </div>
   


<br/><br/><br/>
  <div style={{textAlign:'center' }}>

  <Button type="primary "  onClick={()=>{history.push('/profil/${id}/edit')}}>Edit Profil</Button>
  </div>
  </div>
    
      

  </div>
 
  
  </div>
    </>
   
    
 



  )
}

export default Profil
