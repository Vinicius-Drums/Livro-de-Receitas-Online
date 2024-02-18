// components/ModalAdicionarReceitas/AdicionarReceitas.jsx
import React, { useState } from "react";
import potImage from "../../Imagens/Pot.png";
import "./AdicionarReceitas.css";

// Componente para adicionar novas receitas
const AdicionarReceitas = ({ isOpen, onClose, onAddRecipe }) => {
  // Estado para armazenar os dados da nova receita
  const [novaReceita, setNovaReceita] = useState({
    nome: "",
    ingredientes: "",
    modoPreparo: "",
    lactose: false,
    gluten: false,
  });

  // Função para lidar com a mudança nos campos de entrada
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNovaReceita((prevReceita) => ({
      ...prevReceita,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Função para adicionar uma nova receita
  const handleAddRecipe = () => {
    onAddRecipe(novaReceita);
    // Limpar os campos após adicionar a receita
    setNovaReceita({
      nome: "",
      ingredientes: "",
      modoPreparo: "",
      lactose: false,
      gluten: false,
    });
    // Fechar o modal
    onClose();
  };

  // Renderização do componente
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div className="popup-card adicionar-receitas">
        {/* Título do modal */}
        <h2>Adicionar Receita</h2>
        {/* Campo de entrada para o nome da receita */}
        <label>
          Nome:
          <input type="text" name="nome" value={novaReceita.nome} onChange={handleInputChange} />
        </label>
        {/* Campo de entrada para os ingredientes da receita */}
        <label>
          Ingredientes:
          <textarea name="ingredientes" value={novaReceita.ingredientes} onChange={handleInputChange} />
        </label>
        {/* Campo de entrada para o modo de preparo da receita */}
        <label>
          Modo de Preparo:
          <textarea name="modoPreparo" value={novaReceita.modoPreparo} onChange={handleInputChange} />
        </label>
        {/* Campo de entrada para as restrições (lactose e glúten) da receita */}
        <label className="restricoes-label">
          Restrições:
          <div className="restricoes-inputs">
            <label>
              <input type="checkbox" name="lactose" checked={novaReceita.lactose} onChange={handleInputChange} />
              Lactose
            </label>
            <label>
              <input type="checkbox" name="gluten" checked={novaReceita.gluten} onChange={handleInputChange} />
              Glúten
            </label>
          </div>
        </label>
        {/* Container dos botões de ação */}
        <div className="buttons-container">
          {/* Botão para adicionar a receita */}
          <button onClick={handleAddRecipe}>Adicionar</button>
          {/* Botão para cancelar e fechar o modal */}
          <button onClick={onClose}>Cancelar</button>
        </div>
        {/* Ícone do pote */}
        <div>
          <img src={potImage} alt="Pot" />
        </div>
      </div>
    </div>
  );
};

export default AdicionarReceitas;
