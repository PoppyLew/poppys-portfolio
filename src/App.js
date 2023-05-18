import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import NavBar from './components/nav';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import { Route, Routes } from 'react-router';




function App() {
  return (
    <div className="App" >
        <Header />
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Projects />} ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />} ></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
