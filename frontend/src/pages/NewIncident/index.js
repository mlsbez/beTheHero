import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; /* feather icons */


import './styles.css';


import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content"> {/* tem uma borda por cima do layout, menor que a página (container) */}
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/> {/* componente */}
                        Voltar para home
                    </Link>

                </section>

                <form>
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}