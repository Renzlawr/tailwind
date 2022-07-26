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

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route element={<NotFound />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App