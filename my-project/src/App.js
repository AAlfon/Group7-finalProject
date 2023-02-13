
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./pages/Home";
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
      <div className='App'>
        <Routes>
         
            <Route path="/" exact component={Home} />
        </Routes>
        <Navbar />
      </div>

  );
}

export default App;
