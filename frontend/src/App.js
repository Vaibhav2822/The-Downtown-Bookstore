import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Components/Signup';
import Nav from './Components/Nav';
import Login from './Components/Login';
import './Components/Signup.css'
import PrivateComponent from './Components/PrivateComponent';
import Home from './Components/Home';
import './Components/Nav.css'
import Products from './Components/Products';
import Contact from './Components/Contact';
import './Components/Login.css';
import './Components/Home.css'
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Nav />
          <Routes>
              <Route element={<PrivateComponent />}>
                
              </Route>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App;
