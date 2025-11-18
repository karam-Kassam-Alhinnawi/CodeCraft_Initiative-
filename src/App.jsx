import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import i18n from './i18n'
import { useTranslation } from 'react-i18next'
import LandingPage from './pages/LandingPage'
import SignUp from './components/Auth/SignUp'

function App() {
  const {i18} = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language
   }, [i18n.language])

    return(
      <>
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<SignUp/>} path='/signup'/>
      </Routes>
      </>
    )
}

export default App
