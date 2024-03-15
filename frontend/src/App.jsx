import {Route, Routes } from "react-router-dom";
import { HomePage, Login } from "./pages/index"
// import Signup from "./pages/loginPage";

function App() {
 

  return (
    <>
      
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/login" element={<Login/>} />
      {/* <Route exact path="/signup" render={props=><Signup {...props} />} /> */}
      </Routes>   
    </>
  )
  
}

export default App
