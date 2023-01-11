import { Layout} from 'antd';


import { UserProvider } from '../Context/UserContext';
import SideBar from './SideBar';
import BrandTable from '../brand/brandTable';

const { Content, Sider } = Layout;

const Dashboard = () => {

    return(
        <>

      
       
         
          <Layout >
          {/* <SideBar/> */}
          
            {/* <Content><BrandTable/></Content> */}
          </Layout>
          
        
      
    
        </>
    )
}
export default Dashboard