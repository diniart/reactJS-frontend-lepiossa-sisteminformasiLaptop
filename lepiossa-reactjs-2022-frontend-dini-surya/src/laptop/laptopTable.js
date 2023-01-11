import {useContext, useEffect, useState} from "react"
import { useHistory } from "react-router-dom";
import axios from "axios"
import { UserContext } from "../Context/UserContext";
import {Table,Button} from 'antd'
import React from "react";
import ReactDOM from "react-dom";

const LaptopTable = () =>{
 
    
  let history = useHistory();
  const [user] = useContext(UserContext)
  const [laptop, setLaptop] = useState([])
  const [fetchTrigger, setFetchTrigger] = useState(true)

  useEffect(()=>{
    const fetchData = async () => {
      const result = await axios.get(`https://lepiossa-app-golang.herokuapp.com/laptop`)

      setLaptop(result.data.data.map(x=>{ return {...x,key:x.id} }) )
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
        axios.delete(`https://lepiossa-app-golang.herokuapp.com/laptop/${id}`, {headers: {"Authorization" : "Bearer "+ user.token}})
        .then(() => {
          setFetchTrigger(true)
        })
        

      }else if (caseName === "edit"){
        history.push(`/dashboard/laptop/${id}/edit`)
      }
    }
    
    return(
     
     
      <Button type="primary" style={{  }} onClick={handleAction}> {name}</Button>
      
    )
  }

const defaultColumns = [
  {
    title: 'ID',
    dataIndex:'id',
    key:'id',
    sorter:(a, b) => a.id.localeCompare(b.id)
  },
  {
    title: 'Title',
    dataIndex: 'namaLaptop',
    key:'namaLaptop',
    sorter: (a, b) => a.namaLaptop.localeCompare(b.namaLaptop)
  },
  {
    title: 'Brand ',
    dataIndex:'brandID',
    key:'brandID',
    sorter:(a, b) => a.brandID.localeCompare(b.brandID)
  },
  {
    title: 'Operasi Sistem',
    dataIndex:'osID',
    key:'osID',
    sorter:(a, b) => a.osID.localeCompare(b.osID)
  },
  {
    title: 'Layar',
    dataIndex:'layar',
    key:'layar',
    sorter:(a, b) => a.layar.localeCompare(b.layar)
  },
  {
    title: 'Hardisk',
    dataIndex:'hardisk',
    key:'hardisk',
    sorter:(a, b) => a.hardisk.localeCompare(b.hardisk)
  },
  {
    title: 'RAM',
    dataIndex:'ram',
    key:'ram',
    sorter:(a, b) => a.ram.localeCompare(b.ram)
  },
  {
    title: 'Grafis',
    dataIndex:'grafis',
    key:'grafis',
    sorter:(a, b) => a.grafis.localeCompare(b.grafis)
  },
  // {
  //   title: 'Rating',
  //   dataIndex: 'ratingID',
  //   key: 'ratingID',
  //   sorter: (a, b) => a.ratingID.localeCompare(b.ratingID)
  // },
  {
    title: 'Harga',
    dataIndex: 'harga',
    key: 'harga',
    sorter: (a, b) => a.harga.localeCompare(b.harga)
  },
  {
    title: 'Prosesor',
    dataIndex: 'prosesor',
    key: 'prosesor',
    sorter: (a, b) => a.prosesor.localeCompare(b.prosesor)
  },
 
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
      <h1 style={{textAlign:'center' }}>Daftar List Laptop</h1>

      {/* <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange2}
      />
      <ul>
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div> */}



      {user !== null &&
      <div style={{textAlign:'center' }}>

        <Button type="primary" style={{ backgroundColor:"green" }} onClick={()=>{history.push("/dashboard/laptop/create")}}>Tambah Laptop</Button>
      </div>
      }
      <br/>
      {/* <table className="list-forms">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Gender</th>
            <th>Tinggi</th>
            {user !== null &&
            <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {pesertaLomba.map((val, index)=>{
            return(

              <tr key={index}>
                <td>{index + 1}</td>
                <td>{val.name}</td>
                <td>{val.gender}</td>
                <td>{val.height}</td>
                {user !== null &&
                <td>
                  <ActionButton name="Edit" id={val.id}/>
                  &nbsp;
                  <ActionButton name="Delete" id={val.id}/>
                </td>}
              </tr>
            )
          })}
        </tbody>
      </table> */}






<Table dataSource={laptop} columns={columns} />
    </>
  )
}

export default LaptopTable
