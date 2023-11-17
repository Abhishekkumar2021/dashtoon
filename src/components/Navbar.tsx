import './Navbar.css'
import { IoHomeOutline, IoPlayOutline } from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="logo">
            <h1>Comic Generator</h1>
        </div>
        <div className="links">
            <a href="/"> <IoHomeOutline /> Home </a>
            <a href="/start"> <IoPlayOutline />Start comicing</a>
        </div>
    </div>
  )
}

export default Navbar