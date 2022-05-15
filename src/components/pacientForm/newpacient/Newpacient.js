// External imports
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link } from "react-router-dom";



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
        window.location.pathname = '/pacient'
    }

    function grabName(event){setName(event.target.value)}
    function grabEmail(event){setEmail(event.target.value)}
    function grabPassword(event){setPassword(event.target.value)}

  return (
    <div>    
        <h3>Área de cadastro exclusiva para clientes</h3>  
        <form onSubmit={onSubmit}>
            <input type='text' name='html_name' placeholder='Nome' onChange={grabName}/>
            <input type='email' name='html_email' placeholder='E-mail' onChange={grabEmail}/>
            <input type='pass' name='html_password' placeholder='Senha' onChange={grabPassword}/>
            <input type='submit' value='Cadastrar'/>
        </form>
        <Link to='/pacient'><button>Voltar para consultas</button></Link>
    </div>
  )
}
