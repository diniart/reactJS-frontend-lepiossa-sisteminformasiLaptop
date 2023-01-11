import '../App.css'
import Home from './Home'
import React from 'react'


import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'Up to Date',
    content: "The information we provide is always up to date, so everyone doesn't have to worry about very significant changes. we will continue to provide the latest information",
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'beautiful design',
    content: "Your comfort is important to us. then we will give a look that really spoils your eyes so you don't get too bored",
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Complete and Reliable Data',
    content: 'The data we provide is very complete and also taken from very reliable sources. so no need to worry about the truth in here..',
  },
]
const About =() =>{

    return (
        <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>we provide insight to everyone</p>
        </div>
        <div className="contentHolder">
          <p>
          lepiosa is a website to find detailed and complete information about laptops. We know that information is needed to get the determination to take action before it's too late. With this, everyone can make considerations before buying their laptop with full confidence and stability through us, a trusted and safe site. Everyone's comfort is our priority, so we provide services that make you comfortable and can trust us.
          </p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
    )


}

export default  About