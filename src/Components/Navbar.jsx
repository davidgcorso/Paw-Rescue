import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

export const Navbar = () => {
  return (
    <header>
      <nav className='navBar'>
      <div className='navBar__menu'></div>
      
        <Link to="/" >
      <img src="/src/assets/pawlogo.PNG" alt="Logo" className="navBar__logo"/>
      <div className='navBar__paw'></div>
      </Link>
      
        <ul className='navBar__links'>
      <li><NavLink to='about'>Quienes Somos</NavLink></li>
      <li><NavLink to='volunteer'>Voluntariado</NavLink></li>
      <li><NavLink to='contact'>Contacto</NavLink></li>
    </ul>
    <div className='navBar__buttonContainer'>
    <Link to='donate'><button className='navBar__button'>DONAR</button></Link> 
    </div>
</nav>
    </header>
  )
}
