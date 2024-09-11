import {createHashRouter, Outlet} from "react-router-dom"
import './App.css'
import Navltems from "./components/Navltems"
import Footer from "./components/Footer"



function App() {


  return (
    <>
      <Navltems/>
    <div className="min-vh-100">
    <Outlet/>
    </div> 
     <Footer/>
    </>
    
  )

}


export default App


