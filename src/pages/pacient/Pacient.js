// Files imports
import { PacientForm } from '../../components/pacientForm/PacientForm';

// External imports
import { Link } from "react-router-dom";
import React from 'react';

// CSS
import './Pacient.css'





export const Pacient = () => {
  
  return (
    <div className='Pacient'>
      <h1>Olá Paciente!</h1>
      <h3>Aqui você pode verificar suas consultas ou marcar novos exames!</h3>
      <h4>Por favor, se identifique:</h4>
      <PacientForm />
      <Link to='/'><button>Voltar</button></Link>
    </div>
  )
}
