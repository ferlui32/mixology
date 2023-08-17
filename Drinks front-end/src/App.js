import {
    BrowserRouter as Router,
    Routes, Route
  } from 'react-router-dom'
  import Footer from "./components/Footer"
  import Drinks from "./pages/drinks/drinksPage"
  import NavBar from "./pages/navBar/navBar"
  import HomePage from './pages/home/HomePage.js'

  const App = () => {
  
    return (
      <Router>
        <div>
          <NavBar />
        </div>
  
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<Drinks />} />
        </Routes>
        <div>
            <Footer />
        </div>
        
      </Router>
      
    )
  }

  export default App