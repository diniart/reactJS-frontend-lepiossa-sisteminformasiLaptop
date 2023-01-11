import {useContext, useEffect, useState} from "react"
import { useHistory, useParams } from "react-router-dom"
import axios from "axios"
import { UserContext } from "../Context/UserContext";
import { Form , Input, Button, Checkbox } from 'antd';    

const OsForm = () =>{
  let { id } = useParams();
  let history = useHistory()
  let initialForm = {namaOs: ""}
  const [user] = useContext(UserContext)
  const [input, setInput] = useState(initialForm)
  const [currentId, setCurrentId] =  useState(null)


  useEffect(()=>{ 
    const fetchData = async () => {
      const result = await axios.get(`https://lepiossa-app-golang.herokuapp.com/os/${id}`)
      let {namaOs} = result.data.data
      console.log(result)
      setInput({namaOs})
      setCurrentId(id)
    }

    if (id !== undefined){
      fetchData()
    }
  },[id])

  const handleSubmit = (event)=>{
    event.preventDefault()
      if (currentId !== null){
        // edit
        axios.patch(`https://lepiossa-app-golang.herokuapp.com/os/${currentId}`, input, {headers: {"Authorization" : "Bearer "+ user.token}})
        .then(() => {
          history.push("/dashboard/operasiSistem-table")
        })   
      }else{
        // new
        axios.post(`https://lepiossa-app-golang.herokuapp.com/os `, input, {headers: {"Authorization" : "Bearer "+ user.token}})
        .then(() => {          
          history.push("/dashboard/operasiSistem-table")
        })
      }
      setInput(initialForm)
  }

  const handleChange = (event) =>{
    let val = event.target.value
    let name = event.target.name
    setInput({...input, [name]: val})
  }
  return (
    <>
    <h1 style={{textAlign:'center' }}>Form Operasi Sistem</h1>

<div className="containerF">
  <form  onSubmit={handleSubmit}>
  <div className="row">   
    <div className="col-25">
      <label >Oprasi sistem</label>
    </div>
    <div className="col-75">
      <input type="text"  name="namaOs" placeholder="nama os.." value={input.namaOs} onChange={handleChange}/>
    </div>
  </div>

  
  <br/>
  <div className="row">
    <input type="submit" value="Submit"/>
  </div>
  </form>
  <div style={{textAlign:'center' }}>

  <Button type="primary " onClick={()=>{history.push("/dashboard/operasiSistem-table")}}>Kembali Ke Tabel</Button>
  </div>
  </div>
    </>
   
    



  )
}

export default OsForm
