import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar'
import TabSiswa from './pages/TabSiswa'
import Catatkas from './pages/Catatkas'
import Pengeluarankas from './pages/Pengeluarankas'
import Laporan from './pages/Laporan'
import Dashboard from './pages/dashboard'
import "bootstrap"


function App() {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/tabsiswa' element={<TabSiswa/>}/>
        <Route path='/catatkas' element={<Catatkas/>}/>
        <Route path='/pengeluarankas' element={<Pengeluarankas/>}/>
        <Route path='/laporan' element={<Laporan/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
  )
}

export default App