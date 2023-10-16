import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Edit from './components/Edit';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      
<Router>
  <Routes>
    <Route path= '/' element={<Home/>}/>
    <Route path='/create' element={<Add/>}/>
    <Route path='/edit' element={<Edit/>}/>

    
  </Routes>
</Router>

    </div>
  );
}

export default App;
