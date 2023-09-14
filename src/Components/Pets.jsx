import '../styles/Pets.css'
import { DataContext } from '../Context/DataContext'
import { useContext } from 'react'

export const Pets = () => {
    const {data} = useContext(DataContext)
    
    return data.map((pet)=> {
        const imagePath = `../../src/assets/pets/${pet.img}`
        return (
            <figure className='pet' key={pet.id}>
                <h3 className={`pet__text ${pet.id % 2 === 0 ? 'yellow' : ''}`}>{pet.name}</h3>
                    <img src={imagePath} alt={pet.name} className='pet__img' />
                    
                </figure>
        )
      })
}
