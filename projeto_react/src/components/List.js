import Item from './Item'
import React, { Component }  from 'react';


function List() {
    return (
        <>
            <h1>Área de conhecimento:</h1>
            <ul>                
                <Item habilidade="Python" ano={2022} />
                <Item habilidade="Garantia de Qualidade (QA)" ano={2022} />
                <Item habilidade="React" ano={2023} />
            </ul>
        </>
       
    )
}

export default List