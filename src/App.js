import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Nav from './components/nav';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
       <Header/>
     <Nav/>
     <Footer/>
    </div>
  );
}

export default App;
