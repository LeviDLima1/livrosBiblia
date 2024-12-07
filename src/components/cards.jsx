import Filtro from './filtro';
import { livrosBiblia } from './arrays'
import { detalhesLivrosBiblia } from './arrays';

import { useState } from 'react';
export default function Card() {

  const [livros, setLivros] = useState(livrosBiblia);
  const [livroSelecionado, setLivroSelecionado] = useState(null);

  const abrirModal = (livroId) => {
    const livro = detalhesLivrosBiblia.find((livro) => livro.id === livroId);
    setLivroSelecionado(livro);
  };

  const fecharModal = () => {
    setLivroSelecionado(null);
  };

  const [testamento, setTestamento] = useState("Todos"); // 'Todos', 'Velho', 'Novo'

  // Filtrando os livros com base no testamento
  const livrosFiltrados = testamento === "Todos" ? livros : livros.filter((livro) => livro.testamento === testamento);

  return (
    <>
      <div className='p-4'>
        {/* Cards */}
        <Filtro setTestamento={setTestamento} />
        <main className="w-full flex flex-col items-center justify-center gap-6
        md:grid md:grid-cols-4 md:p-20
        ">

          
          {livros.map((livro) => (
            <div
              key={livro.id}
              className="w-full border border-slate-600 rounded-xl p-2 text-center flex flex-col gap-4 hover:scale-90 hover:bg-[#f5f8da] transition-all cursor-pointer
              
              md:hover:scale-95 
              "
              onClick={() => abrirModal(livro.id)} // Chama a função para abrir o modal
            >
              <img src={livro.imagem} alt={livro.titulo} className="rounded-xl grayscale
              
              md:w-[320px] md:h-[250px] md:rounded-xl md:grayscale md:flex md:items-center md:justify-center md:border-0 m-auto
              " />
              <h2 className="text-3xl font-Cinzel font-semibold">{livro.titulo}</h2>
              <p className="font-Exo">{livro.descricao}</p>
            </div>
          ))}
        </main>

        {/* Modal */}
        {livroSelecionado && (
          <div className="w-full flex fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-45 z-[1000] items-center justify-center p-4 overflow-auto">
            <div className="bg-white rounded-xl p-3 mt-28
            
                md:max-w-[720px] md:mt-12 md:p-8
            ">
              <button
                className="bg-red-500 hover:bg-red-400 text-white p-1 px-4 rounded-lg mb-6

                md:text-3xl 
                "
                onClick={fecharModal}
              >
                Fechar
              </button>
              <div className='flex flex-col gap-4 text-center'>
                <img
                  src={livroSelecionado.imagem}
                  alt={livroSelecionado.titulo}
                  className="rounded-xl grayscale
                  
                  md: md:h-[250px] md:rounded-xl md:grayscale md:flex md:items-center md:justify-center md:border-0 m-auto
                  "
                />
                <h2 className="text-3xl font-semibold font-Cinzel underline underline-offset-8
                
                md:text-5xl
                ">{livroSelecionado.titulo}</h2>
                <p className="font-Exo text-justify
                
                md:text-2xl
                ">{livroSelecionado.conteudo}</p>
                <p className='font-semibold font-Cinzel
                md:text-3xl
                '>{livroSelecionado.versiculoChave}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>

  )
}
