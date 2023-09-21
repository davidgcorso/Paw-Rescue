import '../styles/Pet.css'
import { DataContext } from '../Context/DataContext'
import { useContext } from 'react'
import { Link, useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenus } from '@fortawesome/free-solid-svg-icons'
import { faMarsStrokeUp } from '@fortawesome/free-solid-svg-icons'

export const Pet = () => {
    const { data } = useContext(DataContext);
    const { petName } = useParams();
    
    const pet = data.find((item) => item.name === petName);

    if (!pet) {
      return <div>Animal no encontrado</div>;
    }

    return (
      <>
        <section className="pet__container">
          <figure className="petImg__container">
            <img src={`../../src/assets/pets/${pet.img}`} alt={pet.name} className="petImg" />
          </figure>
          <article className="pet__description">
            <h2 className="pet__title">{pet.name}</h2>
            <ul className="pet__list">
              <li className="pet__list-item">Edad: {pet.age}</li>
              <li className="pet__list-item">Genero: {pet.gender==="Hembra" ? <span><FontAwesomeIcon icon={faVenus} /></span> : <span><FontAwesomeIcon icon={faMarsStrokeUp} /></span>}</li>
              <li className="pet__list-item">{pet.spec1}</li>
              <li className="pet__list-item">{pet.spec2}</li>
              <li className="pet__list-item">{pet.spec3}</li>
              <li className="pet__list-item">{pet.spec4}</li>
              <li className="pet__list-item">Esterilizado: {pet.sterilized ? "✔" : "✖"}</li>
            </ul>
            <div className="pet__buttonContainer">
              <figure className="pet__buttonPaw">
                <div className="paw"></div>
              </figure>
              <Link to='requirements'><button className="pet__button">ADOPTAR</button></Link>
            </div>
          </article>
        </section>
      </>
    );
}