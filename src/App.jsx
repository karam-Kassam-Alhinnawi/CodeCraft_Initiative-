import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import i18n from './i18n'
import { useTranslation } from 'react-i18next'
import LandingPage from './pages/LandingPage'

function App() {
  const {i18} = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language
   }, [i18n.language])

    return(
      <>
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
      </Routes>
      </>
    )
}

export default App
