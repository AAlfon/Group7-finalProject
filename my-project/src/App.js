import Navbar from './Components/Navbar';
import { Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';



const App = () => {
  return (
      <div className='App'>
<Navbar />
        <Routes>
         
            <Route path="/" element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='menu' element={<Menu/>} />
            <Route path='contact' element={<Contact/>} />
        </Routes>
        
      </div>

  );
}

export default App;
