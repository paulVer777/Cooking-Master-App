import React from 'react'
import {Link} from 'react-router-dom'
import uuidv4 from 'uuid'

const Header = () => (
    <div className = 'header'>
        <Link className = 'header__link' to = '/'>Home</Link>
        <Link to = {`/creator/${uuidv4()}`}>Add recipe </Link>
    </div>
)


export default Header