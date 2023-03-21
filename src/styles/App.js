import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Moviedetails from './component/Moviedetails/Moviedetails';
import Loginpage from './component/LoginPage/Loginpage';
import Register from './component/Register/Register';
import Bookticket from './component/BookTicket/Bookticket';
import Confirm from './component/Confirmpage/Confirm';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route index element={ < Loginpage />}></Route>
          <Route path='/Home' element={<Home /> }></Route>
          <Route path='movie/:id' element={<Moviedetails />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/bookticket/:price' element={ < Bookticket />}></Route>
          <Route path='/Confirmpage' element = {<Confirm />}></Route>
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;

