import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import User from './User';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <Router>

        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
          <Route path='/user/:id' element={<User></User>}></Route>
        </Routes>
        <Footer></Footer>
        
      </Router>
    </div>
  );
}

export default App;
