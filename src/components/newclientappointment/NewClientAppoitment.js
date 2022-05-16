// External imports
import React, { useState } from 'react'
import axios from 'axios';

// CSS
import './Newclientappointment.css';


const url_new_appoitment = 'https://fast-gorge-46895.herokuapp.com/addappointment';


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
        <div className='NewClientAppoitment'>
            <h3>E aí {name}! Você precisa de uma nova consulta ? veja os médicos(as) disponíveis</h3>
            <form className='NewClientAppoitment_form'>
                {
                    doctors.map((doctor) => (
                        <div key={doctor._id} className='NewClientAppoitment_form_card'>
                            <p>Especialidade: <b>{doctor.db_specialty}</b></p>
                            <p>Doutor(a): <b>{doctor.db_name}</b></p>
                            <p>CRM: <b>{doctor.db_crm}</b></p>
                            <p>Data e horario desejado ?</p>
                            <input type='date' name='minhadata' onChange={grabDate}/>
                            <select name="select" className='select_input' onChange={grabTime}>
                                <option value="08:00" name='hora'>08:00</option>
                                <option value="09:00" name='hora'>09:00</option>
                                <option value="10:00" name='hora'>10:00</option>
                                <option value="11:00" name='hora'>11:00</option>
                                <option value="14:00" name='hora'>14:00</option>
                                <option value="15:00" name='hora'>15:00</option>
                            </select>
                            <p>O que você está sentindo ?</p>
                            <textarea onChange={grabinfo} placeholder='informe o problema em até 50 caracteres'  maxLength='50' minLength='1'/>
                            <input type='submit' onClick={ () => saveNewAppoitment(doctor.db_crm, doctor.db_name, doctor.db_specialty, date, time)} value='Agendar!'/>
                        </div>
                    ))
                }               
            </form>
        </div>
    )
}


