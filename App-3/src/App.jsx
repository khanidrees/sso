
import './App.css';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
  

  
    return (
      <BrowserRouter>
        <Routes>
          <Route
          path ="/"
          element = {<Dashboard/>}
          />
        </Routes>
      </BrowserRouter>
      
    )
  
}

export default App
