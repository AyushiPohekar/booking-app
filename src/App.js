import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/home/Home';
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/hotels" element={<List/>}/>
    <Route path="/login" element={<Login/>}/>
    {/* <Route path='/signup' element={<SignUp/>}/> */}
    <Route path="/hotels/:id" element={<Hotel/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
