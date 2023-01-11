import {useContext, useEffect, useState} from "react"
import { useHistory } from "react-router-dom";
import axios from "axios"
import { UserContext } from "../Context/UserContext";
import {Table,Button} from 'antd'
import React from "react";
import ReactDOM from "react-dom";

const BrandTable = () =>{
  let history = useHistory();
  const [user] = useContext(UserContext)
  const [brand, setBrand] = useState([])
  const [fetchTrigger, setFetchTrigger] = useState(true)

  useEffect(()=>{
    const fetchData = async () => {
      const result = await axios.get(`https://lepiossa-app-golang.herokuapp.com/brand`)
      console.log(result)

      setBrand(result.data.data.map(x=>{ return {...x,key:x.id} }) )
    }
    if (fetchTrigger){
      fetchData()
      setFetchTrigger(false)
    }  
  },[fetchTrigger])


  const ActionButton = ({name, id})=>{
    
    const handleAction = ()=>{
      let caseName = name.toLowerCase()
      if ( caseName === "delete"){
        axios.delete(`https://lepiossa-app-golang.herokuapp.com/brand/${id}`, {headers: {"Authorization" : "Bearer "+ user.token}})
        .then(() => {
          setFetchTrigger(true)
        })
        

      }else if (caseName === "edit"){
        history.push(`/dashboard/brand/${id}/edit`)
      }
    }
    
    return(
     
     
      <Button type="primary" style={{  }} onClick={handleAction}> {name}</Button>
      
    )
  }

const defaultColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => a.id.localeCompare(b.id)
  },
  {
    title: 'Brand',
    dataIndex: 'namaBrand',
    key: 'namaBrand',
    sorter: (a, b) => a.namaBrand.localeCompare(b.namaBrand)
  }

]


// if the user is already logged in then the action column is added
const columns = user !== null ? [
  ...defaultColumns,
  {
    title: 'Action',
    key: 'action',
    render: (val) => (
      <>
        <ActionButton name="Edit" id={val.id}/>
        &nbsp;
        <ActionButton  name="Delete" id={val.id}/>
      </>
    ),
  }
] : defaultColumns

  
  return (
    <>
      <h1 style={{textAlign:'center' }}>Daftar List Brand</h1>

      {user !== null &&
      <div style={{textAlign:'center' }}>

        <Button type="primary" style={{ backgroundColor:"green" }} onClick={()=>{history.push("/dashboard/brand/create")}}>Tambah Brand</Button>
      </div>
      }
      <br/>
      





<Table dataSource={brand} columns={columns} />
    </>
  )
}

export default BrandTable
