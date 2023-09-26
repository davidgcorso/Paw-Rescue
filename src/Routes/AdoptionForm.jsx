import '../styles/AdoptionForm.css'
import { useContext } from 'react'
import  {  useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../Context/DataContext'


export const AdoptionForm =() =>{
   const {data} = useContext(DataContext)
   console.log(data)
    const { petName } = useParams()
    const petForm = data.find((item) => item.name === petName)
   console.log(petForm)
  const [formData, setFormData] = useState({
    mascota: petName,
    nombre: '',
    apellido: '',
    correo: '',
    vivienda: 'Elige una opción',
    otrasMascotas: 'No',
    comentarios: '',
  }) 
  

  const handleSubmit = (e) => {
    e.preventDefault() 
    
    console.log(formData) 
  } 

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  } 

  return (
    <div className='requirements'>
      <h1 className='requirements__title'>Formulario de Requerimientos para adoptar a {petForm.name}</h1>
      <figure className='requiriments__imgContainer'>
        <img src={`../../src/assets/pets/${petForm.img}`} alt={petForm.name} className='requirements__img'/>
      </figure>
      <form onSubmit={handleSubmit} className='requirements__form'>
        {/* Nombre */}
        <label htmlFor="nombre" className='requirements__label first'>Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          placeholder='Escribe tu nombre'
          className='requirements__Input'
        />

        {/* Apellido */}
        <label htmlFor="apellido" className='requirements__label'>Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
          placeholder='Escribe tu apellido'
          className='requirements__Input'
        />

        {/* Correo Electrónico */}
        <label htmlFor="correo" className='requirements__label'>Correo Electrónico:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
          placeholder='pawrescue@woofmiau.com'
          className='requirements__Input'
        />

        {/* Tipo de Vivienda */}
        <div className='form__container'>
        <div className='form__section'>
        <label htmlFor="vivienda" className='requirements__label'>Tipo de Vivienda:</label>
        <select
          id="vivienda"
          name="vivienda"
          value={formData.vivienda}
          onChange={handleChange}
          className='requirements__Input'
        >
          <option value="Elige una opción">Elige una opción</option>
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
        </select>
        </div>
        <div className='form__section'>

        {/* Tienes otras mascotas? */}
        
        <label className='requirements__label'>¿Tienes otras mascotas?</label>
        
          <input
            type="radio"
            id="si"
            name="otrasMascotas"
            value="Sí"
            checked={formData.otrasMascotas === 'Sí'}
            onChange={handleChange}
            className='requirements__radioOptions'
          />
          <label htmlFor="si"className='requirements__radioOptions-label'>Sí</label>
        
        
          <input
            type="radio"
            id="no"
            name="otrasMascotas"
            value="No"
            checked={formData.otrasMascotas === 'No'}
            onChange={handleChange}
          />
          <label htmlFor="no" className='requirements__radioOptions-label'>No</label>
        </div>
        </div>
        
        {/* Cuadro de Texto */}
        <div className='requirements__textArea'>
        <label htmlFor="comentarios" className='textArea__label'>Algo que quieras agregar a tu solicitud?</label>
        <textarea
          id="comentarios"
          name="comentarios"
          rows="12"
          value={formData.comentarios}
          onChange={handleChange}
          placeholder='Escribe aquí...'
          className='textArea__box'
        />
        </div>
        {/* Botón de Envío */}
        <div className='button__container'>
      
                <div className="paw__white"></div>
              
        <button type="submit" className='requirements__button'>ENVIAR</button>
        </div>
      </form>
    </div>
  ) 
}


