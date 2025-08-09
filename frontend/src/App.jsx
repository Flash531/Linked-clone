import { useContext } from 'react';
import { UserContext } from './Context/StoreContext';
import Navbar1 from './components/Navbar1/navbar1'
import Navbar2 from './components/Navbar2/navbar2'
import LandingPage from './pages/LandingPage/landingPage'
import Footer from './components/Footer/footer'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/SignUp/signUp'
import Login from './components/Login/login'
import Feed from './components/Feed/feed';
import Profile from './components/Profile/Profile';
import './App.css'

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen flex flex-col w-full box-border bg-[#F3F2EF]">
      {user ? <Navbar2 /> : <Navbar1 />}
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signUp' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
