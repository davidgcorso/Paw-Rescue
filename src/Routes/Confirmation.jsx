import '../styles/Confirmation.css'
import success from '../assets/confirmation.svg'

export const Confirmation = () => {
  return (
    <>
    <figure className='confirmation__container'>
        <img src={success} alt="confiramción" className='confirmation__img'/>
    </figure>
    </>
  )
}
