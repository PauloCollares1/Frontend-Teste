import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { Clientappointment } from '../appointmentlist/Clientappointment.js';

const url_client = 'http://localhost:5000/clientsapi';
const url_doctor = 'http://localhost:5000/doctorsapi';

export const PacientForm = () => {

    const[name, setName] = useState();
    const[clients, setClients] = useState();
    const[doctors, setDoctors] = useState();
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[showexam, setShowExam] = useState(false);
        
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

    function onSubmit(event){
        event.preventDefault();
        console.log("--------------------")
        console.log(email +' - '+ password)
        checkUser(clients, email, password);
    }

    function grabEmail(event){setEmail(event.target.value)}
    function grabPassword(event){setPassword(event.target.value)}
    
    function checkUser(clients, email, password){
        clients.map((client) => {
            if(client.db_email === email && client.db_password === password){
                setName(client.db_name);
                setShowExam(true);
            }
        })
    }
    console.log(showexam)

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type='text' name='html_email' placeholder='E-mail' onChange={grabEmail}/>
                <input type='pass' name='html_password' placeholder='Senha' onChange={grabPassword}/>
                <input type='submit' value='Agendar/Conferir consultas'/>
                <Link to='/newpacient'><input type='submit' value='Eu ainda não me cadastrei!' /></Link>
            </form>
            {!showexam ? <p>não vejo nada</p>: <Clientappointment email={email} name={name} doctors={doctors}/>}
        </>
    )
}
