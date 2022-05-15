// External imports
import { Link } from "react-router-dom";
import React from 'react';

// CSS
import './Home.css';





export const Home = () => {
  
  return (
    <div className='Home'>
        <h1>Seja Bem vindo(a) ao Consultor de exames!</h1>
        <h3>Para começarmos é só escolher uma opção abaixo:</h3>
        <h4>Você é Doutor(a) ou Paciente ?</h4>
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
