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
        
    useEffect(() => {

        axios.get(url)
            .then((response) => {
                return setDoctors(response.data);
            });
    }, []); 

    function onSubmit(event){
        event.preventDefault();
        console.log("--------------------")
        console.log("crm: " + crm +' - '+ password)
        checkUser(doctors, crm, password);
    }

    function grabCrm(event){setCrm(event.target.value)}
    function grabPassword(event){setPassword(event.target.value)}
    
    function checkUser(doctors, crm, password){
        doctors.map((doctor) => {
            if(doctor.db_crm === crm && doctor.db_password === password){
                setShowExam(true)
            }
        })
    }

    return (
        <div className='DoctorForm'>
            <form className='DoctorForm_form' onSubmit={onSubmit}>
                <input type='text' name='html_crm' placeholder='crm' onChange={grabCrm}/>
                <input type='pass' name='html_password' placeholder='Senha' onChange={grabPassword}/>
                <input type='submit' value='Conferir consultas'/>
                <Link to='/newdoctor'><input type='submit' value='Médico(a) não registrado!' /></Link>
            </form>
            {!showexam ? <></>: <Doctorappointment crm={crm} />}
        </div>
    )
}