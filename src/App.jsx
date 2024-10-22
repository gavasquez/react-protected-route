import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Login } from './components/Login';
import './App.css'
import { ProtectedRoute } from './components/utils/ProtectedRoute';
import { useStore } from "./hooks/useAuth";

function App() {

  const {user} = useStore();

  console.log(user)

  return (
    <BrowserRouter>
      <div className="container mt-5">
        <Routes>
          <Route element={<ProtectedRoute isAuthenticated={user} redirectPath='/login' />} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
