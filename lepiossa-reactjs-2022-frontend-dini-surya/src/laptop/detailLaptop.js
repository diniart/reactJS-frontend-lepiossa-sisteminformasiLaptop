
import {useContext, useEffect, useState} from "react"
import { useHistory, useParams } from "react-router-dom"
import axios from "axios"
import { UserContext } from "../Context/UserContext";
import "./detail.css"

import { Card, Col, Row, Image} from 'antd';

  
const DetailLaptop = ()=>{
    const [laptop, setLaptop] = useState({Brand:{},OperasiSistem:{}})
    
    const {id} = useParams()
    useEffect(()=>{ 
      const fetchData = async () => {
        const resultLaptop = await axios.get(`https://lepiossa-app-golang.herokuapp.com/laptop/${id}`)
        let {namaLaptop, osID, brandID,layar, hardisk, ram, grafis,ratingID, harga, image, prosesor, detail, Brand,OperasiSistem, Rating} = resultLaptop.data.data

       

        

      setLaptop({namaLaptop, osID, brandID,layar, hardisk, ram, grafis,ratingID, harga, image, prosesor, detail, Brand,OperasiSistem, Rating})
     
  
      
        
      }
      console.log(id)
      if (id !== undefined){
        fetchData()
      }
    },[id])


    return (
        <>
        {console.log(laptop)}

        <div className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2 style={{ fontWeight:"bold" }}> Details Laptop </h2>


                </div>
                <br/>
        <div style={{ marginLeft:"70px", marginRight:"70px"}}>
               
              
            
                <h1 style={{ fontWeight:"bold" }}>{laptop.namaLaptop}</h1>
                <p style={{ color:"orange", fontWeight:"bold" }}>{laptop.harga}</p>
                <Row>
                  
                  <Col flex={2} >
                    rating : {laptop.ratingID}/10
                    <br/>
                    <Image
                      width={200}
                      src={laptop.image}/>
                      </Col>
                  <Col flex={3} > 
                  <div style={{ width:"500px", paddingTop:"20px", paddingLeft:"20px", borderStyle: "outset", marginLeft:"30px"}}>
                    {laptop.detail}

                  </div>
                    </Col>
                </Row>
                <br/><br/>
<p>Spesifikasi: </p>
                <table>
                  <tr>
                    <td>Brand</td>
                    {/* <td>{laptop.brandID}</td> */}
                    <td>{laptop.Brand.namaBrand}</td>
                  </tr>
                  <tr>
                    <td>Prosesor</td>
                    <td>{laptop.prosesor}</td>
                  </tr>
                  <tr>
                    <td>Operasi System</td>
                    <td>{laptop.OperasiSistem.namaOs}</td>
                  </tr>
                  <tr>
                    <td>Layar</td>
                    <td>{laptop.layar} </td>
                  </tr>
                  <tr>
                    <td>Hardisk</td>
                    <td>{laptop.hardisk}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{laptop.ram}</td>
                  </tr>
                  <tr>
                    <td>Grafis</td>
                    <td>{laptop.grafis}</td>
                  </tr>
                  <tr>
                    <td>Rating</td>
                    <td>{laptop.ratingID}</td>
                  </tr>
                </table>


               
             

            </div>

        </div>
        
        </div>
        
        </>
    )
}

export default DetailLaptop
