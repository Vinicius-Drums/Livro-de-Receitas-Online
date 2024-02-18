// components/ModalDetalhesReceita/DetalhesDaReceita.jsx
import React, { useState } from "react";
import potImage from "../../Imagens/Pot.png";

// Componente de detalhes da receita em formato de modal
const DetalhesDaReceita = ({ isOpen, onClose, receita, onEditRecipe, onDeleteRecipe }) => {
  // Estado para controlar a exibição do modal de confirmação
  const [confirmacaoAberta, setConfirmacaoAberta] = useState(false);

  // Função para exibir o modal de confirmação
  const showConfirmation = () => {
    setConfirmacaoAberta(true);
  };

  // Função para confirmar a exclusão
  const confirmDelete = () => {
    onDeleteRecipe(receita.id);
    onClose();
  };

  // Função para cancelar a exclusão
  const cancelDelete = () => {
    setConfirmacaoAberta(false);
  };

  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      {/* Card do modal de detalhes */}
      <div className="popup-card">
        {/* Título do modal */}
        <h2>Detalhes da Receita</h2>
        <div>
          {/* Imagem do pote */}
          <img src={potImage} alt="Pot" />
        </div>
        {/* Informações da receita */}
        <p>Nome: {receita.nome}</p>
        <p>Ingredientes: {receita.ingredientes}</p>
        <p>Modo de Preparo: {receita.modoPreparo}</p>
        <p>Restrições: {receita.lactose && "Lactose"} {receita.gluten && "Glúten"}</p>
        {/* Botões para editar, excluir e fechar o modal */}
        <button onClick={() => onEditRecipe(receita)}>Alterar</button>
        <button onClick={showConfirmation}>Excluir</button>
        <button onClick={onClose}>Fechar</button>
        {/* Modal de confirmação */}
        {confirmacaoAberta && (
          <div className="popup-card">
            <h2>Confirmar Exclusão</h2>
            <p>Deseja realmente excluir esta receita?</p>
            <button onClick={confirmDelete}>Sim</button>
            <button onClick={cancelDelete}>Não</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetalhesDaReceita;
