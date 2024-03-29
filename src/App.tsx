import Navbar from "./components/Navbar"
import Home from "./components/Home"
import FooterSection from "./components/Footer"
import Info from "./components/Info"
import Gallery from "./components/Gallery"
import About from "./components/About"
import Contact from "./components/Contact"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/register-school" element={'Register School Page'} />
      <Route path="/study" element={'Study Abroad Page'} />
      <Route path="/login" element={'Login Page'} />
      <Route path="/signup" element={'Signup Page'} />
      <Route path="/start" element={'Get Started Page🤗'} />
      <Route path="/more-info" element={'More Informations Page'} />
      <Route path="/why" element={<Info />} />
      <Route path="*" element={'404 - Page Not Found😡😡'} />
      
    </Routes>
    <FooterSection />
    </>
  )
}

export default App
