import LaptopCard from "../laptop/laptopcard"
import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';
import { Link } from "react-router-dom"
import '../App.css'
import reactRouterDom from "react-router-dom";

const Home = () => {


  

const items = [
  {
    key: '1',
    title: 'Website terpercaya untuk mendapatkan infomasi laptop terpercaya',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum, ligula eu tempor condimentum, lorem urna auctor lorem, sed accumsan tellus odio in nisl. Curabitur vitae laoreet ipsum. Praesent ac congue nibh, at laoreet nunc. Curabitur interdum ullamcorper ex in laoreet. Vestibulum molestie, erat id ullamcorper tempus, orci est maximus est, non viverra diam lorem ut lacus. Aenean convallis viverra elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam sagittis eget magna volutpat sodales. Curabitur ac turpis a dolor sollicitudin suscipit finibus eu magna.',
  },
  {
    key: '2',
    title: 'Informasi yang selalu up to date',
    content: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum, ligula eu tempor condimentum, lorem urna auctor lorem, sed accumsan tellus odio in nisl. Curabitur vitae laoreet ipsum. Praesent ac congue nibh, at laoreet nunc. Curabitur interdum ullamcorper ex in laoreet. Vestibulum molestie, erat id ullamcorper tempus, orci est maximus est, non viverra diam lorem ut lacus. Aenean convallis viverra elementum',
  },
  {
    key: '3',
    title: 'Referensi sebelum memilih laptop ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum, ligula eu tempor condimentum, lorem urna auctor lorem, sed accumsan tellus odio in nisl. Curabitur vitae laoreet ipsum. Praesent ac congue nibh, at laoreet nunc. Curabitur interdum ullamcorper ex in laoreet. ',
  },
]

  return (
    <div id="hero" className="heroBlock">
      <Carousel autoplay>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                {/* <p>{item.content}</p> */}
                <div className="btnHolder">
                  {/* <Button type="primary" size="large"></Button> */}
                  <Button size="large"><i className="fas fa-desktop"></i>   <Link to="/laptop"> Telusuri Laptop </Link></Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>

       
     
    )
}
export default Home