import PropTypes from 'prop-types'

const Button = ({color, text, onAdd}) =>{
   

    
    return (
    <button className='btn' onClick= {onAdd} style={{ backgroundColor: color}}>{text}</button>
    )
}

Button.defaultProps= {
    color: 'steelblue'
}

Button.propTypes={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button