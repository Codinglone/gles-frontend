import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={'About Page'} />
      <Route path="/contact" element={'Contact Page'} />
      <Route path="/gallery" element={'Gallery Page'} />
      <Route path="/register-school" element={'Register School Page'} />
      <Route path="/study" element={'Study Abroad Page'} />
      <Route path="/login" element={'Login Page'} />
      <Route path="/signup" element={'Signup Page'} />
      <Route path="/more-info" element={'More Informations Page'} />
      <Route path="*" element={'404 - Page Not Found😡😡'} />
      
    </Routes>
    </>
  )
}

export default App
