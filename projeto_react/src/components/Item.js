import PropTypes from 'prop-types'
import React, { Component }  from 'react';


function Item({habilidade, ano}) {
    return (
        <>
            <li>
                {habilidade} - {ano}
            </li>
        </>
    )
}

Item.propTypes = {
    habilidade: PropTypes.string.isRequired,
    ano: PropTypes.number.isRequired,
}

Item.defaultProps = {
    habilidade: 'faltou habilidade',
    ano: 0,
}
export default Item