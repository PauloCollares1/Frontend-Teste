import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const url = 'http://localhost:5000/addmedic';

export const Newdoctor = () => {

    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const [crm, setCrm] = useState();
    const[password, setPassword] = useState();
    const[specialty, setSpecialty] = useState();

    function saveNewDoctor(){
        axios.post(url, {
            html_name:name,
            html_email:email,
            html_crm : crm,
            html_password:password,
            html_specialty: specialty
        });
    }
    function onSubmit(event){
        event.preventDefault();
        console.log("--------------------")
        console.log(name +' - '+ password + ' - ' + email)
        saveNewDoctor()
        window.location.pathname = '/doctor'
    }

    function grabName(event){setName(event.target.value)}
    function grabEmail(event){setEmail(event.target.value)}
    function grabCrm(event){setCrm(event.target.value)}
    function grabPassword(event){setPassword(event.target.value)}
    function grabspecialty(event){setSpecialty(event.target.value)}

  return (
    <div>  
        <h3>Área de cadastro exclusiva para médicos(as)</h3>  
        <form onSubmit={onSubmit}>
            <input type='text' name='html_name' placeholder='Nome' onChange={grabName}/>
            <input type='email' name='html_email' placeholder='E-mail' onChange={grabEmail}/>
            <input type='text' name='html_crm' placeholder='CRM' onChange={grabCrm}/>
            <input type='pass' name='html_password' placeholder='Senha' onChange={grabPassword}/>
            <select name="select" onChange={grabspecialty}>
                <option value="pediatra" name='html_specialty'>Pediatria</option>
                <option value="cardiologia" name='html_specialty' >cardiologia</option>
                <option value="generalista" name='html_specialty' >Generalista</option>
            </select>
            <input type='submit' value='Cadastrar'/>
        </form>
        <Link to='/doctor'><button>Voltar para Consultas</button></Link>
    </div>
  )
}