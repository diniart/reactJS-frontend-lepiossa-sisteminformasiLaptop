import {useContext, useEffect, useState} from "react"
import { useHistory } from "react-router-dom";
import axios from "axios"
import { UserContext } from "../Context/UserContext";
import {Table,Button} from 'antd'
import React from "react";
import ReactDOM from "react-dom";

const OsTable = () =>{
  let history = useHistory();
  const [user] = useContext(UserContext)
  const [os, setOs] = useState([])
  const [fetchTrigger, setFetchTrigger] = useState(true)

  useEffect(()=>{
    const fetchData = async () => {
      const result = await axios.get(`https://lepiossa-app-golang.herokuapp.com/os`)
      console.log(result)

      setOs(result.data.data.map(x=>{ return {...x,key:x.id} }) )
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
        axios.delete(`https://lepiossa-app-golang.herokuapp.com/os/${id}`, {headers: {"Authorization" : "Bearer "+ user.token}})
        .then(() => {
          setFetchTrigger(true)
        })
        

      }else if (caseName === "edit"){
        history.push(`/dashboard/operasiSistem/${id}/edit`)
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
    title: 'Operasi Sistem',
    dataIndex: 'namaOs',
    key: 'namaOs',
    sorter: (a, b) => a.namaOs.localeCompare(b.namaOs)
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

// const [searchTerm, setSearchTerm] = React.useState("");
//  const [searchResults, setSearchResults] = React.useState([]);
//  const handleChange2 = event => {
//     setSearchTerm(event.target.value);
//   };
//  React.useEffect(() => {
//     const results = os.filter(person =>
//       person.toLowerCase().includes(searchTerm)
//     );
//     setSearchResults(results);
//   }, [searchTerm]);
  
  return (
    <>
      <h1 style={{textAlign:'center' }}>Daftar List Operasi Sistem</h1>

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

        <Button type="primary" style={{ backgroundColor:"green" }} onClick={()=>{history.push("/dashboard/operasiSistem/create")}}>Tambah Operasi Sistem</Button>
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






<Table dataSource={os} columns={columns} />
    </>
  )
}

export default OsTable
