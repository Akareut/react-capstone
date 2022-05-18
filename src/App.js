import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Cart from './components/Cart'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>}/>  
              <Route path="/cart" element={<Cart/>}/>  
              <Route path="/sign-in" element={<SignIn/>}/>  
              <Route path="/sign-up" element={<SignUp/>}/>  
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
