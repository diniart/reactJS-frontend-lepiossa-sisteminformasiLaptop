import {useContext, useEffect, useState} from "react"
import { useHistory } from "react-router-dom";
import axios from "axios"
import { UserContext } from "../Context/UserContext";
import { Card, Col, Row } from 'antd';
import DetailLaptop from "./detailLaptop";
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Meta } = Card;
const LaptopCard = () =>{
  
  const [size, setSize] = useState('large');
  
  const [inputSearch, setInputSearch] = useState("")
    
  let history = useHistory();
  const [user] = useContext(UserContext)
  const [laptop, setLaptop] = useState([])
  const [brand, setBrand] = useState([])
  const [fetchTrigger, setFetchTrigger] = useState(true)

  useEffect(()=>{
    const fetchData = async () => {
      const result = await axios.get(`https://lepiossa-app-golang.herokuapp.com/laptop`)
      const result2 = await axios.get(`https://lepiossa-app-golang.herokuapp.com/brand`)

      setLaptop(result.data.data.map(x=>{ return {...x,key:x.id} }) )
      setBrand(result2.data.data.map(x=>{ return {...x,key:x.id} }) )
    }
    if (fetchTrigger){
      fetchData()
      setFetchTrigger(false)
    }  
  },[fetchTrigger])

  const handleAction = (id)=>{
    console.log("ID laptop", id)
        axios.get(`https://lepiossa-app-golang.herokuapp.com/laptop/${id}`) 
        
        history.push(`/laptop/${id}/detail`)
   
  }
  const clikFilter = async  (id)=>{
    const result = await  axios.get(`https://lepiossa-app-golang.herokuapp.com/brand/${id}/laptop `) 
    setLaptop(result.data.data.map(x=>{ return {...x,key:x.id} }) )
  }
  const backAll = async  ()=>{
    const result = await axios.get(`https://lepiossa-app-golang.herokuapp.com/laptop`)
    setLaptop(result.data.data.map(x=>{ return {...x,key:x.id} }) )
  }

  const handleChange = async  (event)=>{
    let val = event.target.value
   
    setInputSearch( val)

  }
  const handleSearch = async (event)=>{
    //console.log(inputSearch)
    event.preventDefault()
    const result = await axios.get(`https://lepiossa-app-golang.herokuapp.com/laptop`)
    setLaptop(result.data.data.filter((item)=>item.namaLaptop.toLowerCase().includes(inputSearch.toLowerCase())).map(x=>{ return {...x,key:x.id} }) )

    


  }




  return (
    <>
    <div className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Daaftar Semua laptop</h2>
          <p>cari tau informasi seputar laptop yang anda inginkan!</p>
        </div>

        <div style={{ marginLeft:"20%", }}>
        <form class="example" onSubmit={handleSearch}>
         <input type="text" placeholder="Search.." name="search" onChange={handleChange} value={inputSearch}/>
         <button type="submit" ><i class="fa fa-search"></i></button>
        </form>
        </div>
        <br/><br/><br/>     

        <Button style={{ marginRight:"20px" ,margin:"10px"}} shape="round" size={size}
               onClick={()=>backAll()}>
               
              All

              </Button>
        {brand.map((val)=>{
              return(
              <>
                 
              <Button style={{ marginRight:"20px" }} shape="round" size={size}
               onClick={()=>clikFilter(val.id)}>
               
              {val.namaBrand}

              </Button>
              </>)})}
        
     

        <Row gutter={[16, 16]}>
          {console.log(laptop)}
        {laptop.map((val)=>{
          return(
            <>

          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
            style={{ margin:"50px" }}
                  onClick={() => handleAction(val.id)}

              hoverable
              cover={<img alt="Modern Design" src={val.image} />}
            >
              <Meta title={val.namaLaptop} description={val.harga} />
            </Card>
          </Col>
          </>
              )})}
          
        </Row>
      </div>
    </div>
              </>
  );







}



export default LaptopCard
