// External imports
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
//import { FaHospitalSymbol } from 'react-icons/fa';
import { Link } from "react-router-dom";
import React from 'react';

// CSS
import './Home.css';





export const Home = () => {
  
  return (
    <div className='Home'>
        <FontAwesomeIcon icon={faHeartPulse} className="heart" fa-beat="true" beat />
        <h1>Seja Bem vindo(a) ao Consultor de exames!</h1>
        <h3>Para começarmos é só escolher uma opção abaixo:</h3>
        <h3>Você é Doutor(a) ou Paciente ?</h3>
        <br />
        <Link to='/doctor'><button className='Home_doctor_button'>eu sou <b>Doutor(a)</b></button></Link>
        <br />
        <br />
        <br />
        <Link to='/pacient'><button className='Home_pacient_button'>Eu sou <b>Paciente</b></button></Link>
        <br />
    </div>
  )
}
