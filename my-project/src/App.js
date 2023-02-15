import Navbar from './Components/Navbar';
import { Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Travel from './pages/Travel';
import Footer from './Components/Footer';


const App = () => {
  return (
      <div className='App'>
<Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='menu' element={<Menu/>} />
            <Route path='travel' element={<Travel/>} />
            <Route path='about' element={<About/>} />
            <Route path='contact-us' element={<Contact/>} />
        </Routes>
<Footer />
      </div>

  );
}

export default App;
