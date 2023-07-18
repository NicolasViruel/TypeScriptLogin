import LoginPage from "./pages/LoginPage"
import {  BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import Navigation from "./Components/Navigation";
import { ProtectecRoute } from "./Components/ProtectecRoute";
import { useAuthStore } from "./store/auth";

function App() {

  const isAuth = useAuthStore( state => state.isAuth)


  return (
    <BrowserRouter>

    <Navigation/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/singup" element={<RegisterPage/>}/>
        {/* Ruta Protegida */}
        <Route element= {<ProtectecRoute isAllowed = {isAuth} />}>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Route>


      </Routes>
    </BrowserRouter>
    
  )
}

export default App