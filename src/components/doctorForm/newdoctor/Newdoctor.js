// External imports
import { Link } from "react-router-dom";
import axios from 'axios';

// Files imports
import { useState } from 'react';
import React from 'react'

// CSS
import './Newdoctor.css';


const url = 'https://fast-gorge-46895.herokuapp.com/addmedic';


export const Newdoctor = () => {

    const [crm, setCrm] = useState();
    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[specialty, setSpecialty] = useState();

    function grabName(event){setName(event.target.value)}
    function grabEmail(event){setEmail(event.target.value)}
    function grabCrm(event){setCrm(event.target.value)}
    function grabPassword(event){setPassword(event.target.value)}
    function grabspecialty(event){setSpecialty(event.target.value)}

    function onSubmit(event){
        event.preventDefault();
        console.log("--------------------")
        console.log(name +' - '+ password + ' - ' + email)
        saveNewDoctor();
        alert('Cadastro realizado com sucesso! realize seu primeiro login');
        window.location.pathname = '/doctor'
    }

    function saveNewDoctor(){
        axios.post(url, {
            html_crm : crm,
            html_name:name,
            html_email:email,
            html_password:password,
            html_specialty: specialty
        });
    }

    return (
        <div className="Newdoctor">  
            <h1>Área de cadastro exclusiva para médicos(as)</h1>  
            <form onSubmit={onSubmit} className='Newdoctor_form'>
                <input type='text' className='form_input' name='html_name' placeholder='Nome' onChange={grabName} required maxLength='50'/>
                <input type='email' className='form_input' name='html_email' placeholder='E-mail' onChange={grabEmail} required/>
                <input type='text' className='form_input' name='html_crm' placeholder='CRM' onChange={grabCrm} required/>
                <input type='password' className='form_input' name='html_password' placeholder='Senha' onChange={grabPassword} required/>
                <select name="select" className='form_select' placeholder='aaa' onChange={grabspecialty}>
                    <option value="generalista" name='html_specialty'>Selecione uma especialidade médica</option>
                    <option value="pediatra" name='html_specialty'>Pediatria</option>
                    <option value="cardiologia" name='html_specialty' >cardiologia</option>
                    <option value="generalista" name='html_specialty' >Generalista</option>
                </select>
                <input type='submit' className='form_buttom' value='Cadastrar'/>
            </form>
        </div>
    )
}