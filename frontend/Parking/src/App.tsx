import { Route, Routes } from "react-router-dom"
import Parking_slot_adder from "./components/parking_slot_adder"
import Home_Page from "./components/home_page"
import Individual_Product from "./components/individual_product"


function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home_Page/>}/>
        <Route path="/add" element={<Parking_slot_adder/>}/>
        <Route path="/product/:parameter" element={<Individual_Product/>}/>
        </Routes>
    </>
  )
}

export default App
