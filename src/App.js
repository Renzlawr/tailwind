import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import First from './pages/First'
import Second from './pages/Second'
import Third from './pages/Third'

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
          <Route element={<NotFound />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App