import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/navbar'
import React from 'react'
function App() {


  return (
    <div className='min-h-screen  bg-gray-50 '>
      <header className='bg-white  shadow-md'>
        <Navbar />
      </header>
      <main className='p-6'>
        <Outlet />
      </main>
    </div>
  )
}

export default App;
