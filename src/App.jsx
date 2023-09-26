import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from "./Components/Navbar"
import { Home } from "./Routes/Home"
import { Contact } from "./Routes/Contact"
import { About } from "./Routes/About"
import { Volunteer } from "./Routes/Volunteer"
import { Donate } from "./Routes/Donate"
import { Footer } from "./Components/Footer"
import { Petsprovider } from "./Context/DataContext"
import { Pet } from "./Routes/Pet"
import { AdoptionForm } from "./Routes/AdoptionForm"
import { Confirmation } from "./Routes/Confirmation"
import { ScrollToTop } from "./Components/ScrollToTop"


export const App = () => {
  return (
    <Petsprovider>
    <Navbar/>
    <ScrollToTop/>
    <Routes>
     
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:petName' exact element={<Pet/>}></Route>
        <Route path='/:petName/requirements' element={<AdoptionForm/>}></Route>
        <Route path='/:petName/requirements/success' element={<Confirmation/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/volunteer' element={<Volunteer/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/donate' element={<Donate/>}></Route>
        <Route path='/*' element={<Navigate to='/'/>}></Route>
    </Routes>
    <Footer/>
    </Petsprovider>
  )
}
