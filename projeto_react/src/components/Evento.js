import React, { Component }  from 'react'

function Evento({numero}) {

    function meuEvento() {
        console.log(`O botão foi ativado! ${numero}`)
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento