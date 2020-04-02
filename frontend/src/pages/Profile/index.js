import React, { useEffect, useState } from 'react'; 
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    

    /* disparar uma função em um determinado momento do componente (Profile) */
    /* assim que ele é mostrado em tela */
    useEffect(() => { /* qual função, quando será executada, [array de dependências] (se o que tiver dentro dele mudar (OngId), vai executar a função de novo) */
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => { /* then: pra pegar os dados */
            setIncidents(response.data);
        })
        }, [ongId]);

    /* deletar casos */
    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId, /* pra poder apagar da ONG correta */
                }
            });
            /* atualizar a página assim que é deletado */
            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert('Erro ao deletar o caso. Tente novamente.');
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>
                
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident => ( /* parênteses pra colocar conteúdo JSX */
                    <li key={incident.id}> {/* tem que colocar key no primeiro elemento que tem dentro do map, um valor único */}
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        {/* o que tá passando pra o onClick é uma função, não o resultado dela (pq senão deleta os casos assim que o botão aparecer) */}
                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3"  />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}