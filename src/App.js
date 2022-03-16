import { useState } from 'react';
import './App.css';
import AtividadeForm from './componets/AtividadeForm';
import Atividade from './componets/Atividade';

let initialState = [
  {
    id: 1,
    prioridade: '1',
    titulo: 'titulo',
    descricao: 'primeira atividade',
  },
  {
    id: 2,
    prioridade: '1',
    titulo: 'titulo',
    descricao: 'segunda atividade',
  },
];





function App() {
  const [atividades, setAtividades] = useState(initialState);



  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
    };

    setAtividades([...atividades, { ...atividade }]);
  }

  function deletarAtividade(id){
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltradas]);
  }





  return (
    <>
      <AtividadeForm
      addAtividade={addAtividade}
      atividades={atividades}
      />
      <div className='mt-3'>
        {atividades.map((ativ) => (
          <Atividade 
            key={ativ.id}
            ativ={ativ}
            deletarAtividade={deletarAtividade}
           />
        ))}
      </div>
    </>
  );
}

export default App;