// components/Lista/ListaDeReceitas.jsx
import React from "react";
import potImage from "../../Imagens/Pot.png";
import "./ListaDeReceitas.css";

// Componente de lista de receitas
const ListaDeReceitas = ({ receitas, onShowDetails }) => {
  return (
    <div className="receitas-card">
      {/* Título da lista de receitas */}
      <h2 className="titulo-receitas">Receitas Adicionadas</h2>

      {/* Lista de receitas */}
      <ul className="lista-receitas">
        {/* Mapeamento das receitas */}
        {receitas.map((receita) => (
          <li key={receita.id} className="receita-card">
            {/* Ícone do pote */}
            <img src={potImage} alt="Pot" className="pot-icon" />
            {/* Nome da receita */}
            <span className="receita-nome">{receita.nome}</span>
            {/* Botão para exibir detalhes da receita */}
            <button className="botao-acoes" onClick={() => onShowDetails(receita)}>
              &#10069;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeReceitas;
