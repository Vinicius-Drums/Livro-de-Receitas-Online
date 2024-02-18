// App.jsx
import React, { useState, useEffect } from "react";
import HeaderCabecalho from "./components/Cabecalho/HeaderCabecalho";
import FormularioDeFiltro from "./components/FormFiltro/FormularioDeFiltro";
import ListaDeReceitas from "./components/Lista/ListaDeReceitas";
import AdicionarReceitas from "./components/ModalAdicionarReceitas/AdicionarReceitas";
import DetalhesDaReceita from "./components/ModalDetalhesReceita/DetalhesDaReceita";
import "./styles.css";

// Componente principal da aplicação
const App = () => {
  // Estado para armazenar a lista de receitas
  const [receitas, setReceitas] = useState([
    { // ... (receitas predefinidas)
      id: 1,
      nome: "Strogonoff",
      lactose: true,
      gluten: true,
      ingredientes: [
        "3 peitos de frango cortados em cubos,",
        "1 dente de alho picado,",
        "sal a gosto,",
        "pimenta-do-reino a gosto,",
        "1 cebola picada",
        "2 colheres (sopa) de maionese",
        "1 colher de manteiga,",
        "1/2 copo de ketchup,",
        "1/3 copo de mostarda,",
        "1 copo de cogumelos,",
        "1 copo de creme de leite,",
        "batata palha a gosto,"
      ],
      modoPreparo: "Em uma panela, misture o frango, o alho, a maionese, o sal e a pimenta. Em uma frigideira grande, derreta a manteiga e doure a cebola. Junte o frango temperado até que esteja dourado.Adicione os cogumelos, o ketchup e a mostarda.Incorpore o creme de leite e mexa um pouco sem deixar ferver. Sirva com arroz e batata palha a gosto. ",
      restricoes: []
    },
    { 
      id: 2,
      nome: "Feijão",
      lactose: false,
      gluten: true,
      ingredientes: [
        "1/2 kg de feijão preto de boa qualidade,",
        "3 litros de água,",
        "2 folhas de louro,",
        "6 a 8 dentes de alho amassados,",
        "1 cebola pequena bem picadinha,",
        "1 linguiça calabresa e/ou paio picada em rodelas,",
        "2 colheres de sopa de óleo,",
        "1 tablete de caldo de carne ou costela,",
        "Sal a gosto,"
      ],
      modoPreparo: "Lave bem o feijão e reserve num recipiente plástico, ferva 1 litro de água, junte ao feijão lavado, tampe a vasilha e deixe de molho por uns 30 minutos,Passe para a panela de pressão, sem escorrer a água do molho,acrescente os 2 litros de água restantes e o louro, Tampe e deixe cozinhar por uns 30 minutos após a panela pegar pressão. Em outra panela, aqueça o óleo e refogue a cebola e o alho,acrescente a lingüiça, sempre mexendo para não fritar de um lado só. Acrescente o feijão cozido, o caldo de costela e o sal,  mexa bem para dissolver o caldo de costela, abaixe o fogo e deixe ferver por uns 10 minutos. ",
      restricoes: []
    },
    { 
      id: 3,
      nome: "Peixe Empanado Sem Glúten",
      lactose: false,
      gluten: false,
      ingredientes: [
        "1 merluza, pescada ou tilápia em filés sem espinhas,",
        "100 gramas de farinha de arroz,",
        "2 ovos,",
        "1 pitada de sal,",
        "1 copo de azeite de oliva,"
      ],
      modoPreparo: "Comece por reunir os ingredientes necessários ao preparo desta receita de peixe empanado e frito sem glúten. Em seguida tempere os filés de peixe com sal e pimenta.Para empanar o peixe, comece por bater os ovos num recipiente e colocar a farinha noutro. Passe o peixe primeiro pela farinha e depois pelos ovos, envolvendo bem com ambos os ingredientes.Esquente o azeite de oliva numa frigideira e, quando estiver suficientemente quente, frite os filés de peixe sem glúten de ambos os lados, até dourarem. Retire para um prato com papel absorvente para escorrer o excesso de gordura.",
      restricoes: []
    },
    { 
      id: 4,
      nome: "Arroz",
      lactose: false,
      gluten: true,
      ingredientes: [
        "dentes de alho,",
        "1 e 1/2 xícara de arroz,",
        "2 copos de água,",
        "1 colher de óleo,",
        "1 pitada de sal,"
      ],
      modoPreparo: "Lave o arroz, logo após corte e machuque os dentes de alho, coloque na panela e coloque o sal e o óleo. Frite os dentes de alho e coloque o arroz e a água, mexa e espere 20 minutos no fogo e está pronto",
      restricoes: []
    },
    { 
      id: 5,
      nome: "Brownie sem Glúten",
      lactose: false,
      gluten: false,
      ingredientes: [
        "4 ovos",
        "1 xícara farinha sem glúten Beladri",
        "1 xícara açúcar",
        "1 xícara chocolate em pó",
        "1 xícara de óleo vegetal",
        "1/2 xícara de nozes picada",
        "1 colher (sobremesa) de aroma de baunilha",
        "1 colher (sopa) de fermento químico"
      ],
      modoPreparo: "Bata todos ingredientes no liquidificador sem as nozes , acrescente as nozes e mecha com uma colher,Despeje em uma forma untada e leve para assar em forno preaquecido a 200º C por 40 minutos. ",
      restricoes: []
    },
  ]);
// Efeito para carregar as receitas do localStorage ao iniciar a aplicação
  useEffect(() => {
    const receitasSalvas = JSON.parse(localStorage.getItem("receitas") || "[]");
    setReceitas(receitasSalvas);
  }, []);

// Efeito para salvar as receitas no localStorage sempre que houver uma alteração
  useEffect(() => {
    localStorage.setItem("receitas", JSON.stringify(receitas));
  }, [receitas]);

  // Estado para armazenar as receitas filtradas
  const [receitasFiltradas, setReceitasFiltradas] = useState([]);
  
  // Estado para controlar o filtro selecionado
  const [filtro, setFiltro] = useState("todas");
  
  // Estados para controlar a abertura e fechamento dos modais
  const [modalAdicionarAberto, setModalAdicionarAberto] = useState(false);
  const [modalDetalhesAberto, setModalDetalhesAberto] = useState(false);
  
  // Estado para armazenar a receita selecionada para detalhes, edição ou exclusão
  const [receitaSelecionada, setReceitaSelecionada] = useState({});

    // Efeito para atualizar a lista de receitas filtradas ao alterar o filtro
    useEffect(() => {
     setReceitasFiltradas(
      receitas.filter((receita) => {
        // Verifica se o filtro é "semLeite" e se a receita contém lactose
        if (filtro === "semLeite" && receita.lactose) {
          return false;
        }
        // Verifica se o filtro é "semGluten" e se a receita contém glúten
        if (filtro === "semGluten" && receita.gluten) {
          return false;
        }
        // Se não atender a nenhum dos casos anteriores, a receita é incluída na lista filtrada
        return true;
      })
    );
  }, [receitas, filtro]);

  // Função para lidar com a mudança de filtro
  const handleFilterChange = (filtro) => {
    setFiltro(filtro);
  };
// Função para adicionar uma nova receita
  const handleAddRecipe = (novaReceita) => {
    const novaReceitaComID = {
      ...novaReceita,
      id: new Date().getTime(),
    };
    setReceitas([...receitas, novaReceitaComID]);
    setModalAdicionarAberto(false);
  };
  // Função para exibir detalhes de uma receita
  const handleShowDetails = (receita) => {
    setReceitaSelecionada(receita);
    setModalDetalhesAberto(true);
  };
// Função para editar uma receita
  const handleEditRecipe = (receita) => {
    setReceitaSelecionada(receita);
    setModalDetalhesAberto(false);
    setModalAdicionarAberto(true);
  };
// Função para excluir uma receita
  const handleDeleteRecipe = (receitaId) => {
     // Filtra as receitas, removendo aquela que corresponde ao ID da receita a ser excluída
    const novaListaReceitas = receitas.filter((receita) => receita.id !== receitaId);
    setReceitas(novaListaReceitas);
    setModalDetalhesAberto(false);
  };
  
// Renderização do componente
  return (
    <div>
      <HeaderCabecalho />
      <div className="cards-container">
        <FormularioDeFiltro
          onFilterChange={handleFilterChange}
          filtroSelecionado={filtro}
        />
        <ListaDeReceitas receitas={receitasFiltradas} onShowDetails={handleShowDetails} />
      </div>
      <AdicionarReceitas
        isOpen={modalAdicionarAberto}
        onClose={() => setModalAdicionarAberto(false)}
        onAddRecipe={handleAddRecipe}
      />
      <DetalhesDaReceita
        isOpen={modalDetalhesAberto}
        onClose={() => setModalDetalhesAberto(false)}
        receita={receitaSelecionada}
        onEditRecipe={handleEditRecipe}
        onDeleteRecipe={handleDeleteRecipe}
      />
      {/* Botão de adicionar receita fora do card */}
      <button className="adicionar-receita-btn" onClick={() => setModalAdicionarAberto(true)}>
        &#10133;
      </button>
    </div>
  );
};

export default App;
