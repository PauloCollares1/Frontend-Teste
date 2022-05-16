// Files imports
import { Clientappointment } from '../appointmentlist/Clientappointment.js';

// External imports
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

// CSS
import './PacientForm.css'


const url_client = 'http://localhost:5000/clientsapi';
const url_doctor = 'http://localhost:5000/doctorsapi';


export const PacientForm = () => {

    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[clients, setClients] = useState();
    const[doctors, setDoctors] = useState();
    const[password, setPassword] = useState();
    const[showexam, setShowExam] = useState(false);

    function grabEmail(event){setEmail(event.target.value)}
    function grabPassword(event){setPassword(event.target.value)}
        
    useEffect(() => {
        axios.get(url_client)
            .then((response) => {
                return setClients(response.data);
            });
    }, [url_client]); 
    useEffect(() => {
        axios.get(url_doctor)
            .then((response) => {
                return setDoctors(response.data);
            });
    }, [url_doctor]); 

    function checkUser(){
        clients.map((client) => {
            if(client.db_email === email && client.db_password === password){
                setName(client.db_name);
                return setShowExam(true);
            }
        })
    }

    function onSubmit(event){
        event.preventDefault();
        console.log("--------------------")
        console.log(email +' - '+ password)
        checkUser();
    }
    
    return (
        <div className='PacientForm'>
            <form onSubmit={onSubmit} className='PacientForm_form'>
                <input type='text' className='form_input' name='html_email' placeholder='E-mail' onChange={grabEmail} required maxLength='50'/>
                <input type='password' className='form_input' name='html_password' placeholder='Senha' onChange={grabPassword} required maxLength='50'/>
                <input type='submit' className='form_buttom_pacient' value='Agendar/Conferir consultas'/>
                <Link to='/newpacient'><input type='submit' className='form_buttom_pacient' value='Eu ainda não me cadastrei!' /></Link>
            </form>
            {!showexam ? <p>Você não está logado</p>: <Clientappointment email={email} name={name} doctors={doctors}/>}
        </div>
    )
}
