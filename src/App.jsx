import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Event_Galleries from "./pages/Event_Galleries";
import Event from "./pages/Event";
import Sesi from "./pages/Sesi";
import Photobooth from "./pages/Photobooth";
import Instaprint from "./pages/Instaprint";
import Photo_Move from "./pages/Photo_Move";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-galleries" element={<Event_Galleries />} />
        <Route path="/event" element={<Event />} />
        <Route path="/sesi" element={<Sesi />} />
        <Route path="/photobooth" element={<Photobooth />} />
        <Route path="/instaprint" element={<Instaprint />} />
        <Route path="/photo-move" element={<Photo_Move />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
