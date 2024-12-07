import React, { useState } from "react";
const Filtro = ({ setTestamento }) => {
    const [modalAberto, setModalAberto] = useState(false);
  
    // Funções para filtrar o testamento
    const handleSelecaoTestamento = (testamento) => {
      setTestamento(testamento);
      setModalAberto(false); // Fecha o modal após selecionar
    };
    


    return (
        <>
            <div>
                {/* Botão fixo */}
                <button className="fixed bottom-0 left-0 py-2 w-full bg-gradient-to-r from-[#B3B792] to-[#E5D2B8] text-white font-bold text-xl" onClick={() => setModalAberto(true)}>
                    Filtro
                </button>

                {/* Modal de filtro */}
                {modalAberto && (
                    <div className="fixed left-0 bottom-0 top-0 right-0 bg-black bg-opacity-45 flex items-center justify-center">
                        <div className="flex flex-col gap-6 bg-white p-10 rounded-xl font-semibold">
                            <h2 className="font-Cinzel text-2xl">Escolha o Testamento</h2>
                            <button className=" bg-gradient-to-r from-[#B3B792] to-[#E5D2B8] border border-black rounded-xl py-1 cursor-pointer" onClick={() => handleSelecaoTestamento("Novo")}>Novo Testamento</button>
                            <button className=" bg-gradient-to-r from-[#B3B792] to-[#E5D2B8] border border-black rounded-xl py-1 cursor-pointer" onClick={() => handleSelecaoTestamento("Velho")}>Velho Testamento</button>
                            <button className=" bg-gradient-to-r from-[#B3B792] to-[#E5D2B8] border border-black rounded-xl py-1 cursor-pointer" onClick={() => handleSelecaoTestamento("Todos")}>Mostrar Todos</button>
                            <button className="bg-red-600 text-white hover:bg-red-400 border border-black rounded-xl py-1 cursor-pointer" onClick={() => setModalAberto(false)}>Fechar</button>
                        </div>
                    </div>
                )}
            </div>


        </>
    )
}

export default Filtro;