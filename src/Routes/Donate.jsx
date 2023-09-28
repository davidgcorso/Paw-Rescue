import '../styles/Donate.css'
import { DonationForm } from "../Components/DonationForm"


export const Donate = () => {
  return (
    <div className='donate__container'>
      <h2 className='donate__title'>Con tu donación ayudas a muchas patitas que aun están en busqueda de su nuevo hogar</h2>
      <DonationForm/>
    </div>
  )
}
