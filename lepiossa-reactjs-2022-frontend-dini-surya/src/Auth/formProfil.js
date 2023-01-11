

import axios from "axios"
import { Form , Input, Button, Checkbox } from 'antd';
import { Link } from "react-router-dom"
import {useContext, useEffect, useState} from "react"
import { useHistory, useParams } from "react-router-dom"

import { UserContext } from '../Context/UserContext';




   

const FormPofil=()=>{
    let history = useHistory();
    let { id } = useParams();
    const [currentId, setCurrentId] =  useState(null)
    const [user, setUser] = useContext(UserContext)
   let initialForm={userName: "", email: "" , password: ""}
    const [input, setInput] = useState(initialForm)
    const [fetchTrigger, setFetchTrigger] = useState(true)


    useEffect(()=>{ 
        const fetchData = async () => {
          const result = await axios.get(`https://lepiossa-app-golang.herokuapp.com/user/profil`,{headers: {"Authorization" : "Bearer "+ user.token}})

          let {userName,email,password} = result.data.data
          console.log(result)
          setInput({userName,email,password})
         // setCurrentId(id)
         //setUser({userName, email, password})


        }
    
        // if (id !== undefined){
           fetchData()
        // }
       
      },[])
     

    const handleSubmit=(event)=>{
        event.preventDefault()
        if (currentId !== null){
            // edit
            axios.patch(`https://lepiossa-app-golang.herokuapp.com/user/profil/${currentId}`, input, {headers: {"Authorization" : "Bearer "+ user.token}})
            .then(() => {
              history.push("/profil")
            })   
          }
          setInput(initialForm)

    }
    const handleChange=(event)=>{
        
            let val = event.target.value
            let name = event.target.name
            setInput({...input, [name]: val})
          
    }
 

    return (
        <>
        <h2 style={{textAlign:'center' }} >Profil User</h2>
    
    <div className="containerF">
    
    
    
      <div style={{backgroundColor:"white", width:"500px", height:"570px", margin:"auto"}}>
       
    
      <div style={{backgroundColor:"Azure", width:"100px", height:"120px", margin:"auto", paddingTop:"50px", paddingBottom:"50px"}}>   
      <i class="fa fa-user-circle fa-7x" style={{alignItems:"center" }}></i>
        </div>
    
      <div style={{backgroundColor:"white",  height:"470px", paddingTop:"65px" }}>
      <div style={{backgroundColor:"Azure", textAlign:"left", padding:"30px", paddingRight:"30px" }}>


      <form onSubmit={handleSubmit}>

        <div className="row">   
            <div className="col-25">
            <label >Username</label>
            </div>
            <div className="col-75">
            <input type="text"  name="userName" placeholder="username.." value={input.userName} onChange={handleChange}/>
            </div>
        </div>
        <br/>

        <div className="row">   
            <div className="col-25">
            <label >Email</label>
            </div>
            <div className="col-75">
            <input type="email"  name="email" placeholder="email.." value={input.email} onChange={handleChange}/>
            </div>
        </div>
        <br/>

        <div className="row">   
            <div className="col-25">
            <label >Password</label>
            </div>
            <div className="col-75">
            <input type="password"  name="password" placeholder="password.." value={input.password} onChange={handleChange}/>
            </div>
        </div>
        <br/><br/>

        <div style={{ textAlign:"center" }}>

        <Button type="primary" htmlType="submit">
  Submit
  </Button>
        </div>
  
</form>
</div>
      </div>
        
          
    
      </div>
     
      
      </div>
        </>
       
        
     
    
    
    
      )
}

export default FormPofil