import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

export const Navbar = () => {
  return (
    <header>
      <nav className='navBar'>
        <Link to="/" >
      <img src="/src/assets/pawlogo.PNG" alt="Logo" className="navBar-logo"/>
      </Link>
        
        <ul className='navBar-links'>
      <li><NavLink to='about'>Quienes Somos</NavLink></li>
      <li><NavLink to='volunteer'>Voluntariado</NavLink></li>
      <li><NavLink to='contact'>Contacto</NavLink></li>
    </ul>
    <Link to='donate'><button className='navBar-button'>DONAR</button></Link> 
</nav>
    </header>
  )
}
