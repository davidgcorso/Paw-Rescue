import '../styles/DonationForm.css'
import { useState } from 'react'
import axios from "axios";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

export const DonationForm = () => {
      const [amount, setAmount] = useState(1)
      const [totalAmount, setTotalAmount] = useState(10000)
      const [preferenceId, setPreferenceId] =useState(null)
      initMercadoPago('TEST-4e0440ba-b72e-4be9-8346-e596ec852767');
      const handleButtonClick =(amount) => {
            setAmount(amount)
            setTotalAmount(amount*10000)
      }
      const handleInputChange = (e) => {
            setAmount(e.target.value)
            setTotalAmount(e.target.value*10000)
      }
      //mercado pago
      const createPreference = async () => {
            try {
                  const response = await axios.post("http://localhost:8080/create_preference", {
                        description: "Gracias por la donación",
                        price: totalAmount,
                        quantity: 1,
                  })
                  const { id } = response.data
                  return id
                  } catch (error) {
                        console.log(error)
                  }
            }
      const handleBuy = async () => {
            const id = await createPreference()
            if (id) {
                  setPreferenceId(id)
            }
            }
  return (
    <>
      <div className='donation__paws'>
   <div className='donation__buttonContainer'>
      
      <div className="pawDonate"></div>
    
<button type="submit" className='donation__button' onClick={()=>handleButtonClick(3)}>3</button>
</div>
<div className='donation__buttonContainer'>
      
      <div className="pawDonate"></div>
    
<button type="submit" className='donation__button' onClick={()=>handleButtonClick(5)}>5</button>
</div>
<div className='donation__buttonContainer'>
      
      <div className="pawDonate last"></div>
    
<button type="submit" className='donation__button' onClick={()=>handleButtonClick(10)}>10</button>
</div>
</div>
<div className='donation__otherSection'>
    <label className='donation__label'>Otro valor<input type="number" className="donation__input" placeholder="valor de tu donación" min="1" value={amount} onChange={handleInputChange}></input></label>
    
    <p className='donation__label'>{amount} Patitas equivalen a: CLP {totalAmount}</p>
    <div>
      <button className='navBar__button'onClick={handleBuy}>HACER DONACION</button>
      {preferenceId && <Wallet initialization={{ preferenceId}} />}
    </div>
    </div>
    </>
  )
}
