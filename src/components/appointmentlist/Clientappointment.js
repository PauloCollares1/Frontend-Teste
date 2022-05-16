// Files imports
import { NewClientAppoitment } from '../newclientappointment/NewClientAppoitment';

// External imports
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

// CSS
import './appointmentlist.css';


export const Clientappointment = ({email, name, doctors}) => {

    const url_one_client = `http://localhost:5000/appointmentclient/${email}`;
    const [appointments, setAppointments] = useState();

    useEffect(() => {
        axios.get(url_one_client)
            .then((response) => {
                return setAppointments(response.data);
            });
    },[url_one_client]);

    return (
        <div className='appoitmentlist'>
            {(appointments < 1)||(!appointments) ?
                (   
                    <div>
                        <p>Você ainda não possui nenhuma consulta agendada</p>
                        <NewClientAppoitment email={email} name={name} doctors={doctors}/>
                    </div>
                )
                : 
                (
                    <div className='appoitmentlist_card_grandpa'>
                        <h3>Aqui estão seus exames agendados, {name}!</h3> 
                        <div className='appoitmentlist_card_dad'>
                            {
                                appointments.map((appointment) => (
                                    <div key={appointment._id} className='appoitmentlist_card'>
                                        <p>Prezado(a): <b>{appointment.db_name_client}</b>,<br />
                                        Sua consulta é com o(a)
                                        Dr(a): <b>{appointment.db_name_doctor}</b><br />
                                        Especialista em:  <b>{appointment.db_doctor_specialty}</b><br />
                                        Para falar sobre: {appointment.db_infos}<br />
                                        No dia: <b>{appointment.db_date} </b>- <b>{appointment.db_time}</b> horas</p>
                                    </div>
                                ))
                            }
                        </div>
                        <NewClientAppoitment email={email} name={name} doctors={doctors}/>
                    </div>
                ) 
            }
        </div>
    )
}
