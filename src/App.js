import { Route, Routes } from "react-router";
import Admin from "./Components/Admin/Admin";
import Auth from "./Components/Auth/Auth";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Movies from "./Components/Movies/Movies";

function App() {
  return (
    <div >
      <Header/>
      <section>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/auth' element={<Auth/>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
