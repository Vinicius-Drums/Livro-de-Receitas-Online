// components/FormFiltro/FormularioDeFiltro.jsx
import React, { useState } from "react";
import "./FormularioDeFiltro.css";

// Componente responsável pelo formulário de filtro
const FormularioDeFiltro = ({ onFilterChange, filtroSelecionado }) => {
  // Estado para controlar os checkboxes de filtro
  const [checkboxes, setCheckboxes] = useState({
    semLeite: false,
    semGluten: false,
    todas: false,
  });

  // Função para lidar com a mudança em um checkbox
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  // Função para lidar com o clique no botão de filtro
  const handleFilterButtonClick = () => {
    // Encontra a opção de filtro selecionada
    let selectedFilter = Object.keys(checkboxes).find((key) => checkboxes[key]);

    // Se nenhuma opção estiver selecionada, padrão é "todas"
    if (!selectedFilter) {
      selectedFilter = "todas";
    }

    // Chama a função de callback para alterar o filtro
    onFilterChange(selectedFilter);
  };

  // Renderização do componente
  return (
    <div className="filtro-container">
      <h2>Filtrar</h2>
      <label>
        <input
          type="checkbox"
          name="semLeite"
          checked={checkboxes.semLeite}
          onChange={handleCheckboxChange}
        />
        Sem Lactose
      </label>
      <label>
        <input
          type="checkbox"
          name="semGluten"
          checked={checkboxes.semGluten}
          onChange={handleCheckboxChange}
        />
        Sem Glúten
      </label>
      <label>
        <input
          type="checkbox"
          name="todas"
          checked={checkboxes.todas}
          onChange={handleCheckboxChange}
        />
        Todas
      </label>
      <br />
      <button className="filtro-button" onClick={handleFilterButtonClick}>
        Filtrar
      </button>
    </div>
  );
};

export default FormularioDeFiltro;
