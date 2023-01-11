import { useContext } from 'react';

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from '../Auth/Login';
import Register from "../Auth/Register";
import Profil from '../Auth/profil';
import FormProfil from '../Auth/formProfil';

import RatingForm from '../rating/ratingForm';
import RatingTable from '../rating/ratingTable';

import { UserContext } from '../Context/UserContext';
import DetailLaptop from '../laptop/detailLaptop';
import LaptopCard from '../laptop/laptopcard';
import LaptopTable from '../laptop/laptopTable';
import LaptopForm from '../laptop/laptopForm';

import Home from '../Main/Home';
import Home2 from '../Main/Home2';
import Dashboard from '../Main/dashboard';
import BrandTable from '../brand/brandTable';
import BrandForm from '../brand/brandForm';
import OsTable from '../os/osTable';
import OsForm from '../os/osForm';

import FAQ from '../Main/faq';
import About from '../Main/about';


const Routes = ()=>{
  
  const [user] = useContext(UserContext)
  const PrivateRoute = ({...rest}) =>{
    if (user){
      return <Route {...rest}/>
    }else{
      return <Redirect to="/login" />
    }
  }

  const LoginRoute = ({...rest}) =>{
    if (user){
      return <Redirect to="/" />
    }else{
      return <Route {...rest}/>
    }
  }
  return( 
      <div>
        <div className="App">
          <Switch>
         

            <PrivateRoute exact path="/profil">
              <Profil/>

            </PrivateRoute> 
            <PrivateRoute exact path="/profil/:id/edit">
              <FormProfil/>
            </PrivateRoute>

            <PrivateRoute exact path="/dashboard">
              <Dashboard/>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/brand-table">
              <BrandTable/>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/brand/create">
              <BrandForm/>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/brand/:id/edit">
              <BrandForm/>
            </PrivateRoute>

            <PrivateRoute exact path="/dashboard/operasiSistem-table">
              <OsTable/>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/operasiSistem/create">
              <OsForm/>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/operasiSistem/:id/edit">
              <OsForm/>
            </PrivateRoute>

            <PrivateRoute exact path="/dashboard/rating-table">
              <RatingTable/>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/rating/create">
              <RatingForm/>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/rating/:id/edit">
              <RatingForm/>
            </PrivateRoute>

            <Route exact path="/">
              <Home2/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/faq">
              <FAQ/>
            </Route>
            <Route exact path="/laptop">
              <LaptopCard/>
            </Route>
            <Route exact path="/laptop/:id/detail">
              <DetailLaptop/>
            </Route>
            <PrivateRoute exact path="/dashboard/laptop-table">
              <LaptopTable/>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/laptop/create">
              <LaptopForm/>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/laptop/:id/edit">
              <LaptopForm/>
            </PrivateRoute>
           
            
            <LoginRoute exact path="/register">
              <Register/>
            </LoginRoute>
            <LoginRoute exact path="/login">
              <Login/>
            </LoginRoute>
            
          </Switch>
        </div>
      </div>
  )

}

export default Routes