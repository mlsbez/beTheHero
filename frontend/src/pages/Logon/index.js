import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'; /* feather icons */
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault(); /* faz isso em todo formulário no REACT */
    
        try {
            const response = await api.post('sessions', { id }); /* objeto com o id da ONG que tá querendo fazer login */
        
            localStorage.setItem('ongId', id); /* vai salvar isso no storage do navegador */
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile'); /* enviar o usuário para a rota profile */
        } catch (err) {
            alert('Falha no login. Tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/> {/* componente */}
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}