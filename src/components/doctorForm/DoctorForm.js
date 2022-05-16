// Files imports
import { Doctorappointment } from '../appointmentlist/Doctorappointment';

// External imports
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

// CSS
import './DoctorForm.css';


const url = 'http://localhost:5000/doctorsapi';


export const DoctorForm = () => {

    const[crm, setCrm] = useState();
    const[doctors, setDoctors] = useState();
    const[password, setPassword] = useState();
    const[showexam, setShowExam] = useState(false);
    
    function grabCrm(event){setCrm(event.target.value)}
    function grabPassword(event){setPassword(event.target.value)}

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                return setDoctors(response.data);
            });
    }, []); 

    function validadeDoctor(){
        doctors.map((doctor) => {
            if(doctor.db_crm === crm && doctor.db_password === password){
                return setShowExam(true);
            }       
        })
    }

    function onSubmit(event){
        event.preventDefault();
        console.log("--------------------")
        console.log("crm: " + crm +' - '+ password)
        validadeDoctor();
    }
    
    return (
        <div className='DoctorForm'>
            <form className='DoctorForm_form' onSubmit={onSubmit}>
                <input type='text' name='html_crm' className='form_input' placeholder='Seu CRM' onChange={grabCrm} required maxLength='50'/>
                <input type='password' name='html_password' className='form_input' placeholder='Sua senha' onChange={grabPassword} required maxLength='50'/>
                <input  type='submit' className='form_buttom' value='Conferir consultas!'/>
                <Link to='/newdoctor'><input type='submit' className='form_buttom' value='Médico(a) não registrado!' /></Link>
            </form>
            {!showexam ? <p>Você não está logado</p>: <Doctorappointment crm={crm} />}
        </div>
    )
}