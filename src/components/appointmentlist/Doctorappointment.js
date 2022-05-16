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
                (<p>Você ainda não possui nenhuma consulta agendada</p>)
                :
                (<div className='appoitmentlist_card_grandpa'>
                    <h3>Dr(a) aqui estão suas consultas agendadas, Bom trabalho!</h3>
                    <div className='appoitmentlist_card_dad'>
                        {
                            appointments.map((appointment) => (
                                <div key={appointment._id} className='appoitmentlist_card'>
                                    <p>Paciente: <b>{appointment.db_name_client}</b>,<br />
                                    Contato cliente: <b>{appointment.db_email_client}</b><br />
                                    cliente se queixa de:<br />{appointment.db_infos}<br />
                                    A consulta será No dia <b>{appointment.db_date} </b> - <b>{appointment.db_time}</b> horas</p>
                                </div>
                            ))
                        }
                    </div>
                </div>) 
            }
        </div>
    )
}
