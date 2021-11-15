import ProTypes from 'prop-types'
import Button from './btn'
import { useLocation } from 'react-router'

const Header = ({title, onAdd, showAdd }) => {
    const location = useLocation()
    return  (
        <header className="header">
           <h2>{title}</h2> 
           {location.pathname === '/' && (
            <Button 
            color={showAdd ? 'red': 'green'}
            text={showAdd ? 'close': 'Add'} 
            onClick = {onAdd} />
           )}
           
        </header>
    )
}

Header.defaultProps =  {
    title: 'Task Tracker',
}
Header.ProTypes = {
    title: ProTypes.string.isRequired
}

export default Header
