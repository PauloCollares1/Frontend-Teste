// External imports
import { Link } from "react-router-dom";
import { useState } from 'react';
import React from 'react';
import axios from 'axios';

// CSS
import './Newpaciente.css';


const url = 'http://localhost:5000/addclient';


export const Newpacient = () => {

    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();

    function saveNewClient(){

        axios.post(url, {
            html_name:name,
            html_email:email,
            html_password:password
        });
    }

    function onSubmit(event){
        event.preventDefault();
        console.log("--------------------");
        console.log(name +' - '+ password + ' - ' + email);
        saveNewClient()
        alert('Cadastro realizado com sucesso! realize seu primeiro login');
        window.location.pathname = '/pacient'
    }

    function grabName(event){setName(event.target.value)}
    function grabEmail(event){setEmail(event.target.value)}
    function grabPassword(event){setPassword(event.target.value)}

  return (
    <div className='Newpacient'>    
        <h1>Área de cadastro exclusiva para clientes</h1>
        <h3>Faça seu cadastro para poder marcar uma consulta</h3>
        <form onSubmit={onSubmit} className='Newpacient_form'>
            <input type='text' className='form_input' name='html_name' placeholder='Nome' onChange={grabName}/>
            <input type='email' className='form_input' name='html_email' placeholder='E-mail' onChange={grabEmail}/>
            <input type='password' className='form_input' name='html_password' placeholder='Senha' onChange={grabPassword}/>
            <input type='submit' className='form_buttom_pacient' value='Cadastrar'/>
        </form>
        <Link to='/pacient'><button>Voltar para consultas</button></Link>
    </div>
  )
}
