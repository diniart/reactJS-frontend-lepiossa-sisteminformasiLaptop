import {useContext, useEffect, useState} from "react"
import { useHistory, useParams } from "react-router-dom"
import axios from "axios"
import { UserContext } from "../Context/UserContext";
import { Form , Input, Button, Checkbox } from 'antd';    

const LaptopForm = () =>{
  let { id } = useParams();
  let history = useHistory()
  let initialForm = {namaLaptop: "", osID:1, brandID: 1,layar:"", hardisk:"", ram:"", grafis:"",ratingID:0, harga:"", image:"", prosesor:"", detail:""}
  const [user] = useContext(UserContext)
  const [input, setInput] = useState(initialForm)
  const [currentId, setCurrentId] =  useState(null)

  




  useEffect(()=>{ 
    const fetchData = async () => {
      const result = await axios.get(`https://lepiossa-app-golang.herokuapp.com/laptop/${id}`)
      let {namaLaptop, osID, brandID,layar, hardisk, ram, grafis,ratingID, harga, image, prosesor, detail} = result.data.data
      setInput({namaLaptop, osID, brandID,layar, hardisk, ram, grafis,ratingID, harga, image, prosesor, detail})
      setCurrentId(id)
    }

    if (id !== undefined){
      fetchData()
    }
  },[id])

  const handleSubmit = (event)=>{
    event.preventDefault()
    var newInput = {...input,osID:parseInt(input.osID), ratingID:parseInt(input.ratingID), brandID:parseInt(input.brandID)}
      if (currentId !== null){
        // edit
        axios.patch(`https://lepiossa-app-golang.herokuapp.com/laptop/${currentId}`, newInput, {headers: {"Authorization" : "Bearer "+ user.token}})
        .then(() => {
          history.push("/dashboard/laptop-table")
        })   
      }else{
        // new
        axios.post(`https://lepiossa-app-golang.herokuapp.com/laptop/`, newInput, {headers: {"Authorization" : "Bearer "+ user.token}})
        .then(() => {          
          history.push("/dashboard/laptop-table")
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
   
    <h1 style={{textAlign:'center' }}>Form Laptop</h1>

<div className="containerF">
  <form onSubmit={handleSubmit} >
  <div className="row">   
    <div className="col-25">
      <label >Title</label>
    </div>
    <div className="col-75">
      <input type="text"  name="namaLaptop" placeholder="nama Laptop.." value={input.namaLaptop} onChange={handleChange}/>
    </div>
  </div>


  <div className="row">
    <div className="col-25">
  <label >Brand :</label>
  </div>
  <div className="col-75">
  <select  name="brandID" value={input.brandID} onChange={handleChange} >
    <option value={1}>Lenovo</option>
    <option value={5}>HP</option>
    <option value={6}>Asus</option>
    <option value={7}>Acer</option>
    <option value={8}>Dell</option>
    <option value={9}>Apple</option>
    <option value={10}>Toshiba</option>
    <option value={11}>Samsung</option>
    <option value={12}>MSI</option>
    <option value={13}>Miscrosoft</option>
    <option value={14}>Huawei</option>
  </select>
  </div>
  </div>



  <div className="row">
    <div className="col-25">
  <label >Operasi Sistem :</label>
  </div>
  <div className="col-75">
  <select  name="osID" value={input.osID} onChange={handleChange} >
    <option value={1}>DOS</option>
    <option value={2}>Linux </option>
    <option value={3}>Windows XP</option>
    <option value={5}>Anroid</option>
    <option value={6}>Windows Vista</option>
    <option value={7}>Windows 7</option>
    <option value={8}>Windows 8</option>
    <option value={9}>Windows 10</option>
    <option value={10}>Windows 11</option>
    <option value={11}>macOS Monterey</option>
    <option value={12}>macOS Big Sur</option>
    <option value={13}>macOS Catalina	</option>
    <option value={14}>macOS Mojave</option>
    <option value={15}>macOS High Sierra	</option>
    <option value={16}>macOS Sierra	</option>
    <option value={17}>OS X El Capitan	</option>
    <option value={18}>OS X Yosemite	</option>
    <option value={19}>OS X Mavericks	</option>
    <option value={20}>OS X Mountain Lion	</option>
    <option value={21}>OS X Lion	</option>
  </select>
  </div>
  </div>

  {/* <div className="row">
    <div className="col-25">
      <label >Operasi Sistem</label>
    </div>
    <div className="col-75">
      <input type="number"   name="osID" placeholder="Year(1980-2021)" value={input.osID} onChange={handleChange}/>
    </div>
  </div> */}

  {/* <div className="row">
    <div className="col-25">
      <label >Brand</label>
    </div>
    <div className="col-75">
      <input type="text"  name="brandID" placeholder="brand.." value={input.brandID} onChange={handleChange}/>
    </div>
  </div> */}

  <div className="row">
    <div className="col-25">
      <label > Prosesor</label>
    </div>
    <div className="col-75">
      <input type="text"   name="prosesor" placeholder="Prosesor.." value={input.prosesor} onChange={handleChange}/>
    </div>
  </div>

  
  
  <div className="row">
    <div className="col-25">
      <label >Rating</label>
    </div>
    <div className="col-75">
      <input type="number" min={0} max={10}  name="ratingID" placeholder="0-10" value={input.ratingID  } onChange={handleChange}/>
    </div>
  </div>

  <div className="row">
    <div className="col-25">
      <label >Layar</label>
    </div>
    <div className="col-75">
      <input type="text"  name="layar" placeholder="layar.." value={input.layar} onChange={handleChange}/>
    </div>
  </div>  

  <div className="row">
    <div className="col-25">
      <label >Hardisk</label>
    </div>
    <div className="col-75">
      <input type="text"  name="hardisk" placeholder="hardisk.." value={input.hardisk} onChange={handleChange}/>
    </div>
  </div>  

  <div className="row">
    <div className="col-25">
      <label >RAM</label>
    </div>
    <div className="col-75">
      <input type="text"  name="ram" placeholder="ram.." value={input.ram} onChange={handleChange}/>
    </div>
  </div>  

  <div className="row">
    <div className="col-25">
      <label >Grafis</label>
    </div>
    <div className="col-75">
      <input type="text"  name="grafis" placeholder="grafis.." value={input.grafis} onChange={handleChange}/>
    </div>
  </div> 

   <div className="row">
    <div className="col-25">
      <label >Harga</label>
    </div>
    <div className="col-75">
      <input type="text"  name="harga" placeholder="harga.." value={input.harga} onChange={handleChange}/>
    </div>
  </div>   
  
   {/* <div className="row">
    <div className="col-25">
      <label >Genre</label>
    </div>
    <div className="col-75">
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
    </div>
  </div>  */}


  <div class="row">
    <div className="col-25">
      <label >Description</label>
    </div>
    <div class="col-75">
      <textarea id="subject" name="detail" placeholder="Write something.." style={{height:"200px"}}  value={input.detail} onChange={handleChange}   ></textarea>
    </div>
  </div>

  <div className="row">
    <div className="col-25">
      <label >Image url </label>
    </div>
    <div className="col-75">
      <input type="text"  name="image" placeholder="url.." value={input.image} onChange={handleChange}/>
    </div>
  </div>  
  <br/>
  <div className="row">
    <input type="submit" value="Submit"/>
  </div>
  </form>
  <div style={{textAlign:'center' }}>

  <Button type="primary " onClick={()=>{history.push("/dashboard/laptop-table")}}>Kembali Ke Tabel</Button>
  </div>
  </div>
    </>
  )
}

export default LaptopForm
