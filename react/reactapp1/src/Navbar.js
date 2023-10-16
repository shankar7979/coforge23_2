import { NavLink } from 'react-router-dom'
//import UserForm from './UserForm1'

export const Navbar = () => {

  return (
    <>
      <nav className="nav navbar-dark bg-light text-primary navbar-expand-sm">
        <NavLink to='/userform' style={{ marginLeft: '50px' }} >
          User Form
        </NavLink>

        <NavLink to='/userform1' style={{ marginLeft: '50px' }} >
          Navigate User Form
        </NavLink>

        <NavLink to='/uncontrolledform' style={{ marginLeft: '50px' }} >
          UnControlled Form
        </NavLink>

        <NavLink to='/hookform' style={{ marginLeft: '50px' }} >
          Hook Form
        </NavLink>

        <NavLink to='/personinfo' style={{ marginLeft: '50px' }} >
          Person Info
        </NavLink>
        <NavLink to='/counter1' style={{ marginLeft: '50px' }} >
          Counter1
        </NavLink>
        <NavLink to='/hookcounter' style={{ marginLeft: '50px' }}>
          Hook Counter
        </NavLink>

        <NavLink to='/fetchdata' style={{ marginLeft: '50px' }}>
          Fetch Data
        </NavLink>

      </nav>
      {/* <UserForm></UserForm> */}
    </>
  )
}