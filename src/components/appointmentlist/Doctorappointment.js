import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


export const Doctorappointment = ({crm}) => {

    const url_one_doctor = `http://localhost:5000/appointmentdoctor/${crm}`;

    const [appointments, setAppointments] = useState();

    useEffect(() => {

        axios.get(url_one_doctor)
            .then((response) => {
                return setAppointments(response.data);
            });
    }, [url_one_doctor]); 

    


    return (
        <div>
            {(appointments < 1)||(!appointments) ?
                (<p>Você ainda não possui nenhuma consulta agendada</p>) : 
                (<div> 
                    {
                        appointments.map((appointment) => (
                            <div key={appointment._id}>
                                <p>Doutor(a): {appointment.db_name_doctor}</p>
                                <p>você tem uma consulta marcada com: {appointment.db_name_client}</p>
                                <p>contato cliente: {appointment.db_email_client}</p>
                                <p>cliente se queixa de: {appointment.db_infos}</p> 
                                <p>A consulta será No dia {appointment.db_date} - {appointment.db_time} horas</p>
                            </div>
                        ))
                    }
                </div>) 
            }
        </div>
    )
}
