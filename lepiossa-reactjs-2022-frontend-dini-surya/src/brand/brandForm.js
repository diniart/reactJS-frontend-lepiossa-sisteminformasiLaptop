import {useContext, useEffect, useState} from "react"
import { useHistory, useParams } from "react-router-dom"
import axios from "axios"
import { UserContext } from "../Context/UserContext";
import { Form , Input, Button, Checkbox } from 'antd';    

const BrandForm = () =>{
  let { id } = useParams();
  let history = useHistory()
  let initialForm = {namaBrand: ""}
  const [user] = useContext(UserContext)
  const [input, setInput] = useState(initialForm)
  const [currentId, setCurrentId] =  useState(null)


  // [{"id":
  //,"title":"
  //"description"
  //"year":
  //"duration":
  //"genre":"
  //rating":10
  //"review":"
  //,"image_url":

  useEffect(()=>{ 
    const fetchData = async () => {
      const result = await axios.get(`https://lepiossa-app-golang.herokuapp.com/brand/${id}`)
      let {namaBrand} = result.data.data
      console.log(result)
      setInput({namaBrand})
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
        axios.patch(`https://lepiossa-app-golang.herokuapp.com/brand/${currentId}`, input, {headers: {"Authorization" : "Bearer "+ user.token}})
        .then(() => {
          history.push("/dashboard/brand-table")
        })   
      }else{
        // new
        axios.post(`https://lepiossa-app-golang.herokuapp.com/brand `, input, {headers: {"Authorization" : "Bearer "+ user.token}})
        .then(() => {          
          history.push("/dashboard/brand-table")
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
    <h1 style={{textAlign:'center' }} >Form Brand</h1>

<div className="containerF">
  <form  onSubmit={handleSubmit}>
  <div className="row">   
    <div className="col-25">
      <label >Brand</label>
    </div>
    <div className="col-75">
      <input type="text"  name="namaBrand" placeholder="nama brand.." value={input.namaBrand} onChange={handleChange}/>
    </div>
  </div>

  
  <br/>
  <div className="row">
    <input type="submit" value="Submit"/>
  </div>
  </form>
  <div style={{textAlign:'center' }}>

  <Button type="primary "  onClick={()=>{history.push("/dashboard/brand-table")}}>Kembali Ke Tabel</Button>
  </div>
  </div>
    </>
   
    
      
      // {/* <div>
      //   <form onSubmit={handleSubmit}>
      //     <label>
      //       Masukkan nama peserta:
      //     </label>         
      //     <input required type="text"  name="name" value={input.name} onChange={handleChange}/>
      //     <br/>
      //     <br/>
      //     <label>
      //       Masukkan Gender:
      //     </label>         
      //     <input required type="text" name="gender" value={input.gender} onChange={handleChange}/>
      //     <br/>
      //     <br/>
      //     <label>
      //       Masukkan Tinggi:
      //     </label>         
      //     <input required type="text" name="height" value={input.height} onChange={handleChange}/>
      //     <br/>
      //     <br/>
      //     <input type="submit" value="Submit" />
      //   </form>
      // </div>
      // <br/><br/>
      // <button onClick={()=>{history.push("/peserta")}}>Kembali Ke Tabel</button> */}



  )
}

export default BrandForm
