import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar'
import TabSiswa from './pages/TabSiswa'
import Catatkas from './pages/Catatkas'
import Pengeluarankas from './pages/Pengeluarankas'
import Laporan from './pages/Laporan'
import Dashboard from './pages/dashboard'
import "bootstrap"
import CreatSiswa from './pages/TabSiswa/CreatSiswa'
import UpdateSiswa from './pages/TabSiswa/UpdateSiswa'


function App() {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/tabsiswa' element={<TabSiswa/>}/>
        <Route path='/tabsiswa/create' element={<CreatSiswa/>}/>
        <Route path='/tabsiswa/update/:id' element={<UpdateSiswa/>}/>
        <Route path='/catatkas' element={<Catatkas/>}/>
        <Route path='/pengeluarankas' element={<Pengeluarankas/>}/>
        <Route path='/laporan' element={<Laporan/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
  )
}

export default App