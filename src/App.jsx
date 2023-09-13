import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from "./Components/Navbar"
import { Home } from "./Routes/Home"
import { Contact } from "./Routes/Contact"
import { About } from "./Routes/About"
import { Volunteer } from "./Routes/Volunteer"
import { Donate } from "./Routes/Donate"

export const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/volunteer' element={<Volunteer/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/donate' element={<Donate/>}></Route>
        <Route path='/*' element={<Navigate to='/'/>}></Route>
    </Routes>
    </>
  )
}
