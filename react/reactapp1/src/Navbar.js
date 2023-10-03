import { NavLink } from 'react-router-dom'
import UserForm from './UserForm1'

export const Navbar = () => {

  return (
    <>
    <nav className="nav navbar-dark bg-light text-primary navbar-expand-sm">
      <NavLink to='/userform' style={{ marginLeft: '300px' }} >
        User Form
      </NavLink>
      <NavLink to='/personinfo' style={{ marginLeft: '100px' }} >
        Person Info
      </NavLink>
      <NavLink to='/counter1' style={{ marginLeft: '100px' }} >
        Counter1
      </NavLink>
      <NavLink to='/counter2' style={{ marginLeft: '100px' }}>
        Counter2
      </NavLink>

      <NavLink to='/fetchdata' style={{ marginLeft: '100px' }}>
        Fetch Data
      </NavLink>

      </nav>
      {/* <UserForm></UserForm> */}
    </>
  )
}