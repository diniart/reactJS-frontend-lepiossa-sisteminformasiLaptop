import LaptopCard from "../laptop/laptopcard"
import React from 'react';
import { Button } from 'antd';

//import { Carousel } from 'antd';
import { Link } from "react-router-dom"
import '../App.css'
import reactRouterDom from "react-router-dom";
import { Carousel } from "bootstrap";
//import { Carousel } from "bootstrap";
import CaruselHome from "./carouselhome";

import { Row, Col } from 'antd';


const Home2 = () => {


  

const items = [
  {
    key: '1',
    title: 'Website terpercaya untuk mendapatkan infomasi laptop terpercaya',
    content: 'Data yang kami berikan sangat lengkap dan juga diambil dari sumber yang sangat terpercaya. jadi tidak perlu khawatir tentang kebenaran di sini',
  },
  {
    key: '2',
    title: 'Informasi yang selalu up to date',
    content: 'Informasi yang kami berikan selalu up to date, sehingga setiap orang tidak perlu khawatir dengan perubahan yang sangat signifikan. kami akan terus memberikan informasi terbaru',
  },
  {
    key: '3',
    title: 'Referensi sebelum memilih laptop ',
    content: 'informasi diperlukan untuk mendapatkan tekad untuk mengambil tindakan sebelum terlambat. Dengan ini, semua orang dapat membuat pertimbangan sebelum membeli laptop mereka dengan penuh keyakinan  melalui kami ',
  },
]


  return (
    <>
    <div className="hero2Block">
      <br/><br/><br/> <br/><br/><br/>
      <div style={{ height:"200px", width:"700px",margin:"auto" }}>
     <h1 style={{fontSize:"70px", color:"#ffff99" ,fontWeight:"bold", fontFamily:"Helvetica", marginBottom:"12px"}}>Lepiossa</h1>
     <h1 style={{ color:"white" }}>Temukan pengalamanmu mencari sebuah informasi dari sumber   terpercaya...</h1>
     <br/>
     <div className="btnHolder">
                  {/* <Button type="primary" size="large"></Button> */}
                  <Button size="large"><i className="fas fa-desktop"></i>   <Link to="/laptop"> Telusuri Laptop </Link></Button>
                </div>

      </div>
    </div>
{/* tengah */}

    <div style={{ height:"75vh",}}>

 

<CaruselHome/>
    </div>

    <br/><br/><br/>
       {/* bawah */}
       <div style={{ height:"75vh", padding:"20px"}}>
       <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>

       </div>
     
    </>
    )

}
export default Home2