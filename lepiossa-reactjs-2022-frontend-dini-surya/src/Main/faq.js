import React from 'react';

import { Collapse, Button } from 'antd';
import '../App.css'

const { Panel } = Collapse;
const FAQ  =()=>{

    return(
        <div id="faq" className="block faqBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Frequently Asked Questions</h2>
            <p>Temukan jawaban dari pertanyaan yaang sering ditanyakan  </p>
          </div>
          <Collapse defaultActiveKey={['1']}>
            <Panel header="Bagaimana cara  menemukan daftar laptop?" key="1">
              <p>Untuk menemukan daftar lapttop menuju ke halaman home dan pilih button dan klik pada button telusur Laptop. anda juga bisa mengakses lewat link pada  header yang tertuliskan All Laptop</p>
            </Panel>
            <Panel header="Bagaimana cara melihat detail laptop?" key="2">
              <p>Untk melihat halaman detail laptop , klik pada bagian gambar laptop yang trdapat pada halaman All Laptop pada header.</p>
            </Panel>
            <Panel header="Bisakah saya menambahkan data terkini?" key="3">
              <p>Anda bisa menambahkan data laptop dengan cara anda terdaftar menjadi user pada website ini.</p>
            </Panel>
            <Panel header="Bagaimana cara saya menjadi member user di website ini?" key="4">
              <p>Anda dapat menjadi user di website ini dengan cara register pada link register yang terletak pada header. jika sudah terdaftar anda bisa langsung login</p>
            </Panel>
            <Panel header="bagaimana cara mengganti password" key="5">
              <p>Untuk saat ini website ini  belum dilenkapi fitur mengganti password.</p>
            </Panel>
           
          </Collapse>
          {/* <div className="quickSupport">
            <h3>Ingin respon cepat?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur velit necessitatibus praesentium aliquid eos in neque recusandae, incidunt esse dolore voluptatum nesciunt quod soluta consequuntur voluptatibus ab excepturi nobis! Porro!</p>
            <Button type="primary" size="large"><i className="fas fa-envelope"></i> Email your question</Button>
          </div> */}
        </div>
      </div>  
      );
    }
    


export default FAQ