import '../styles/Home.css'

export const Home = () => {
  return (
    <>
    <section className="firstHomeSection">
    <figure className="firstHomeSection__container">
        <h2 className="firstHomesection__title dogs">Perros</h2>
        <img src="/src/assets/dogs.jpg" alt="perros" className='firstHomeSection__img'/>
    </figure>
    <figure className="firstHomeSection__container">
    <h2 className="firstHomesection__title cats">Gatos</h2>
        <img src="/src/assets/cats.jpg" alt="perros" className='firstHomeSection__img catsImg'/>
    </figure>
    </section>
    <section className="secondHomeSection">
        <h3 className='secondHomeSection__title'>Patitas recién llegando al refugio</h3>
        {/* aca debo hacer un map */}
        <a>
            <figure>
                <h3></h3>
                <img src="" alt="" />
            </figure>
        </a>

    </section>
    </>
  )
}
