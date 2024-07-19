import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Todo from './Components/Todo';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      
     <Router>
      <Routes>
        {/* <Route path='/' element={<Navigate to='/Home'/>}></Route> */}
      <Route path='/' element={<Home/>} />
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path='/Todo' element={<Todo/>}/>
      </Routes>
     </Router>  
     <navbar title="Todo" aboutText="your TODO"/>
    </div>
  );
}
 
export default App;