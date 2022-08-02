import React from 'react';
import '../../style/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faFerry, faFaceAngry } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
        <div className="useful_info">
            <p>Tel: <a href="#">+54 11 12345678</a></p>
            <p>E-mail: <a href="#">estudiocognitio@gmail.com</a></p>
            <p>Dirección <a href="#"> Calle Generica 1234</a></p>
            <p>Horario de atención: 8:00hs a 18:00hs</p>
        </div>
        <div className="socialMedia">
            <div>
                <FontAwesomeIcon icon={faPhone} />
                <p>+54 11 12345678</p>
            </div>

            <div>
                <FontAwesomeIcon icon={faFerry} />
                <p>@estudio_cognitio</p>
            </div>

            <div>
                <FontAwesomeIcon icon={faFaceAngry} />
                <p>Estudio Cognitio</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer