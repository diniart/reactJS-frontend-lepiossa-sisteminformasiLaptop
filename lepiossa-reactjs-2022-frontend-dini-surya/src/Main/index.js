import { Layout} from 'antd';
import Header from "./Header"
import Routes from "../Routes"
import AppFooter from './footer';
import { BrowserRouter as Router} from "react-router-dom";
import { UserProvider } from '../Context/UserContext';
import SideBar from './SideBar';
import 'antd/dist/antd.css'
import '../App.css'

const { Content, Footer } = Layout;

const Main = () =>{
  return(
    <UserProvider>
      <Layout className="layout" style={{ }}>
        <Router>
          <Header/>
          <Layout style={{ marginTop:"63px", paddingBottom:"70px"}}>

          <SideBar/>
          
          <Content style={{  }}>
         
            {/* <div className="site-layout-content"> */}
              <Routes/>
            {/* </div> */}
            </Content>
           
         
          </Layout>
          <Footer >
            <AppFooter/>
            </Footer>
        </Router>
      </Layout>
    </UserProvider>
  )
}

export default Main