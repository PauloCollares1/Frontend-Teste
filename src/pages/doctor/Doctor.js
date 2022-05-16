// Files imports
import { DoctorForm } from '../../components/doctorForm/DoctorForm';

// External imports
import React from 'react'

// CSS
import './Doctor.css';




export const Doctor = () => {
  
  return (
    <div className='Doctor'>
      <h1>Olá Doutor(a)!</h1>
      <h3>Aqui você pode verificar suas consultas agendadas!</h3>
      <h4>Por favor, se identifique:</h4>
      <DoctorForm />
    </div>
  )
}
