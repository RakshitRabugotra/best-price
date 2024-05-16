import { Outlet } from 'react-router-dom'

// Internal Dependencies
import Navbar from '@/components/Navbar'

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
