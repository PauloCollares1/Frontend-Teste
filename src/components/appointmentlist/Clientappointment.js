import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { NewClientAppoitment } from '../newclientappointment/NewClientAppoitment';



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
        <div>
            {(appointments < 1)||(!appointments) ?
                (   
                    <div>
                        <p>Você ainda não possui nenhuma consulta agendada</p>
                        <NewClientAppoitment email={email} name={name} doctors={doctors}/>
                    </div>
                )
                : 
                (
                    <div>
                        <div>
                            <h3>Aqui estão seus exames agendados, {name}!</h3> 
                            {
                                appointments.map((appointment) => (
                                    <div key={appointment._id}>
                                        <p>Prezado(a): {appointment.db_name_client}</p>
                                        <p>você tem uma consulta marcada com: {appointment.db_name_doctor}</p>
                                        <p>especialista em {appointment.db_doctor_specialty}</p>
                                        <p>para falar sobre: {appointment.db_infos}</p>
                                        <p>No dia {appointment.db_date} - {appointment.db_time} horas</p>
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
