import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='absolute bottom-0 left-0 right-0 inline-flex justify-between p-8'>
      <NavLink className={navLinkState} to='/'>
        Home
      </NavLink>
      <NavLink className={navLinkState} to='profile'>
        Profile
      </NavLink>
      <NavLink className={navLinkState} to='settings'>
        Settings
      </NavLink>
    </nav>
  )
}

const navLinkState = ({
  isActive,
  isPending,
}: {
  isActive: boolean
  isPending: boolean
}) => {
  const pending = 'text-gray-500'
  const active = 'text-red-200'

  return isPending ? pending : isActive ? active : ''
}
