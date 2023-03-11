import PropTypes from 'prop-types'

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