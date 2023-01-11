
import {  NotificationOutlined, SmileOutlined,StepForwardOutlined } from '@ant-design/icons';


import { Layout, Menu } from 'antd';
import { useContext } from 'react';
import { Link, useLocation } from "react-router-dom"
import { UserContext } from '../Context/UserContext';

const { SubMenu } = Menu;
const {  Content, Sider } = Layout;

const SideBar = ()=>{
  let location = useLocation();
    const [user, setUser] = useContext(UserContext)
    
    console.log(location.pathname)

    return(
        <>
     
      {location.pathname.search("dashboard") !== -1 &&user !== null && (
        <Sider className="site-layout-background" width={200} >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%',backgroundColor:'#00474f',color:'white' }}
            
          >
            <SubMenu key="sub1"  title="Brand" style={{ backgroundColor:'#00474f' ,color:'white'}}>
              <Menu.Item key="1">
              <Link to="/dashboard/brand-table"> Tabel Brand</Link>
              </Menu.Item>
              <Menu.Item key="2">
              <Link to="/dashboard/brand/create"> Tambah Brand</Link>
              </Menu.Item>
           
            </SubMenu>
            <SubMenu key="sub3" title="os">
              <Menu.Item key="3"><Link to="/dashboard/operasiSistem-table"> Tabel Operasi Sistem</Link></Menu.Item>
              <Menu.Item key="4"> <Link to="/dashboard/operasiSistem/create"> Tambah Operasi Sistem</Link></Menu.Item>
             
            </SubMenu>
            <SubMenu key="sub4"  title="Rating">
              <Menu.Item key="5"><Link to="/dashboard/rating-table"> Tabel Rating</Link></Menu.Item>
              <Menu.Item key="6"> <Link to="/dashboard/rating/create"> Tambah Rating</Link></Menu.Item>
             
            </SubMenu>
            <SubMenu key="sub5" title="Laptop">
              <Menu.Item key="7"><Link to="/dashboard/laptop-table"> Tabel Laptop</Link></Menu.Item>
              <Menu.Item key="8"> <Link to="/dashboard/laptop/create"> Tambah Laptop</Link></Menu.Item>
             
            </SubMenu>
            
            {/* <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu> */}
          </Menu>
        </Sider>
      )} 
    
    </>
    )
}

export default SideBar