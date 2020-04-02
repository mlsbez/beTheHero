import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'; /* feather icons */
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() { 
    const [name, setName] = useState(''); /* valor, função para atualizar esse valor  */
    const [email, setEmail] = useState(''); /* imput de texto: string vazia '' */
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    
    
    async function handleRegister(e) { /* responsável por fazer o cadastro do usuário. e é o evento de submit do formulário */
        e.preventDefault(); /* previne o comportamento default do form de carregar a página toda */
    
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data); /* a resposta dessa chamada é o ID da ONG */
                
            alert(`Seu ID de acesso: ${response.data.id}`); /* usa a crase em vez das aspas pra poder colocar variáveis dentro do texto */
            history.push('/'); /* envia para a rota raiz (login) */
        
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    } 

    return (
        <div className="register-container">
            <div className="content"> {/* tem uma borda por cima do layout, menor que a página (container) */}
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/> {/* componente */}
                        Já tenho cadastro
                    </Link>

                </section>

                <form onSubmit={handleRegister}> {/* Dispara a função assim que o formulário der o submit */}
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={e => setName(e.target.value)} /* e.target.value = o valor do input. Arrow Function: versão reduzida de uma função (e é o parâmetro) */
                    />

                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}                    
                    />
                    
                    <input 
                        placeholder="WhatsApp" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />

                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }} /* 1a { : incluindo um código js no html, 2a { : incluindo um objeto do js */
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        /> 
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}