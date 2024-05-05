//import logo from './logo.svg';
import { Component } from "react";
import './App.css';
import AppRoutes from "./Component/AppRoutes";
import Login from "./Component/Login";
import EmpList from "./Component/EmpList";
import Logout from "./Component/Logout";
import Register from "./Component/Register";
import UpdateProfile from "./Component/UpdateProfile";
import Profile from "./Component/Profile";
import Menu from "./Component/Menu";


class App extends Component {
  render() 
  {

    return (
      <div >

  <AppRoutes/>
  {/* <Login/> */}
{/* <EmpList/> */}

    </div>
  );
}
}


export default App;
