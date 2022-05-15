import React, { useState } from 'react'
import axios from 'axios';

const url_new_appoitment = 'http://localhost:5000/addappointment';

export const NewClientAppoitment = ({email, name, doctors}) => {

    const[date, setDate] = useState();
    const[time, setTime] = useState();
    const[info, setInfo] = useState();

    function grabDate(event){setDate(event.target.value)}
    function grabTime(event){setTime(event.target.value)}
    function grabinfo(event){setInfo(event.target.value)}

    function saveNewAppoitment(doctor_crm, doctor_name, doctor_specialty, date, time){
        
        axios.post(url_new_appoitment, {
            html_crm: doctor_crm,
            html_infos: info,
            html_name_doctor:doctor_name,
            html_name_client:name,
            html_email_client:email,
            html_doctor_specialty:doctor_specialty,
            html_date:date,
            html_time:time
        });
        alert('Parabéns, você agendou uma consulta \n realize o Login para acompanhar todos os seus exames')
    }
 
    return (
        <div>
            <h3>Olá {name}! Vamos criar uma nova consulta ? Escolha um médico</h3>
            <form>
                {
                    doctors.map((doctor) => (
                        <div key={doctor._id}>
                            <p>Especialidade: {doctor.db_specialty}</p>
                            <p>Nome: {doctor.db_name}</p>
                            <p>CRM: {doctor.db_crm}</p>
                            <input type='date' name='minhadata' onChange={grabDate}/>
                            <input type='time' name='meuTime' onChange={grabTime}/>
                            <textarea onChange={grabinfo} placeholder='inform o problema em até 200 caractéres' />
                            <input type='submit' onClick={ () => saveNewAppoitment(doctor.db_crm, doctor.db_name, doctor.db_specialty, date, time)} value='Agendar!'/>
                        </div>
                    ))
                }               
            </form>
        </div>
    )
}


