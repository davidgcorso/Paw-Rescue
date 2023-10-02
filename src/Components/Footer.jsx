import '../styles/Footer.css'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {
  return (
    <>
    <footer>
        <nav className='footer'>
        <ul className='footer__links'>
      <li><NavLink to='about'>Quienes Somos</NavLink></li>
      <li><NavLink to='volunteer'>Voluntariado</NavLink></li>
      <li><NavLink to='contact'>Contacto</NavLink></li>
    </ul>
        <Link to="/" >
      <img src="/src/assets/pawlogo.PNG" alt="Logo" className="footer__logo"/>
      </Link>
      <ul className='footer__social'>
        <li><a href=''><FontAwesomeIcon icon={faYoutube} /></a></li>
        <li><a href=''><FontAwesomeIcon icon={faFacebookF} /></a></li>
        <li><a href=''><FontAwesomeIcon icon={faXTwitter} /></a></li>
        <li><a href=''><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href=''><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
      </ul>
    
        </nav>
<p className="footer__copyRight">David González @ 2023. All rights reserved.</p>
    </footer>
    </>
  )
}
