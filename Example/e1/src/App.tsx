import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/navbar'
function App() {
  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center  text-2xl text-white bg-slate-500'>
        <Outlet />
      </div>
    </div>
  )
}

export default App;
