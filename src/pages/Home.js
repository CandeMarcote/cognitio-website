import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const home = () => {
  return (
    <>
      <main>
        <div className="title_container">
          <h1 className="home_title">Cognitio</h1>
          <p className="subtitle">Estudio Jurídico</p>
        </div>

        <section className="presentationalText">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero inventore porro itaque accusantium unde facilis alias excepturi, modi dignissimos ipsum eum sed tempore facere molestias reprehenderit minima et doloribus ratione quasi, totam dolor dolorum, odit dicta! Harum quaerat tenetur accusamus!</p>
        </section>

        <section className="fueros">
          <div className="home_card">
            <i><FontAwesomeIcon icon={faBell} /></i>
            <h4>Familia</h4>
          </div>

          <div className="home_card">
            <i><FontAwesomeIcon icon={faBell} /></i>
            <h4>Fuero 2</h4>
          </div>

          <div className="home_card">
            <i><FontAwesomeIcon icon={faBell} /></i>
            <h4>Fuero 3</h4>
          </div>

          <div className="home_card">
            <i><FontAwesomeIcon icon={faBell} /></i>
            <h4>Fuero 4</h4>
          </div>
        </section>
      </main>
    </>
  )
}

export default home