import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
    <div>
        <Link to = '/'>Home</Link>
        <Link to = '/creator'>Add recipe</Link>
        <Link to = '/about'>About</Link>
        <Link to = '/editor'>Edit Recipe</Link>
    </div>
)


export default Header