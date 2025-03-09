import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Addproperty from './pages/Addproperty'
import Listing from './pages/Listing'
import Bookings from './pages/Bookings'
import Favourites from './pages/Favourites'
import Header from './components/Header'
import Footer from './components/Footer'  

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/listing" element={<Listing/>}/>
        <Route path="addproperty" element={<Addproperty/>}/>
        <Route path="bookings" element={<Bookings/>}/>
        <Route path="favourites" element={<Favourites/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App