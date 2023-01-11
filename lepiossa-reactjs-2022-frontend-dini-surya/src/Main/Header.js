import {  NotificationOutlined, SmileOutlined,UserOutlined } from '@ant-design/icons';

import { Layout, Menu } from 'antd';
import { useContext } from 'react';
import { Link } from "react-router-dom"
import { UserContext } from '../Context/UserContext';

const { Header } = Layout;
const { SubMenu } = Menu;
const CustomHeader = ()=>{
  const [user, setUser] = useContext(UserContext)


  return(
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    
      <>
      <Menu theme="dark" mode="horizontal" style={{ float:"left" }}>
      <div style={{ color:"white", fontSize:"20pt" ,marginRight:"70px"}}>Lepiossa</div>
      <div style={{ color:"white", fontSize:"20pt" }}>                     </div>
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/laptop">All Laptop</Link>
        </Menu.Item>
        <Menu.Item > 
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item style={{marginRight:"400px"}}> 
          <Link to="/faq">FAQ</Link>
        </Menu.Item>
        </Menu>
        </>

        { user !== null && (
          <>
        <Menu theme="dark" mode="horizontal" style={{}}>

        <Menu.Item style={{ position:"absolute", right:"200px"}}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <SubMenu key="sub2" icon={<SmileOutlined  />} title={user.username} style={{ position:"absolute", right:"55px"}}>  
           <Menu.Item>
             <Link to="/profil">Profil</Link>
           </Menu.Item>
            <Menu.Item>
              <span  onClick={()=>{
                setUser(null)
                localStorage.clear()
              }}>Logout</span>
            </Menu.Item>
             </SubMenu> 
        </Menu>
      </>
        )}
      
        
        
        { user === null && (
         <>
         <Menu theme="dark" mode="horizontal">
         <SubMenu key="sub2" icon={<UserOutlined  />} title="Account"  style={{ position:"absolute", right:"30px"}}> 
            <Menu.Item>
              <Link to="/register">Register</Link>
            </Menu.Item>
            <Menu.Item style={{  }}>
              <Link to="/login">Login</Link>
            </Menu.Item>
            </SubMenu>
            </Menu>
            </>
         
        )}

        { user !== null && (
          <>
          <Menu theme="dark" mode="horizontal" style={{}}>
          
            </Menu>
          </>
        )}
        
        
              
    </Header>
  )
} 

export default CustomHeader