import {Route, Routes } from "react-router-dom";
import { HomePage, Login } from "./pages/index"


function App() {
 

  return (
    <>
      
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/login" element={<Login/>} />
      </Routes>   
    </>
  )
  
}

export default App
