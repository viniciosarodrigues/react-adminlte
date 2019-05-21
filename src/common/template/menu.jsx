import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Home' icon='home' />
        <MenuItem path='/' label='Meu Perfil' icon='user' />
        <MenuTree label='Cadastros' icon='edit'> 
            <MenuItem path='person'
                label='Pessoas' icon='users' />
            <MenuItem path='category'
                label='Categorias' icon='tags' />
            </MenuTree>
        <MenuTree label='Relatórios' icon='print'> 
            <MenuItem path='billingCycles'
                label='Pessoas' icon='users' />
            <MenuItem path='billingCycles'
                label='Categorias' icon='tags' />
            <MenuItem path='billingCycles'
                label='Débitos recorrentes' icon='usd' />
            <MenuItem path='billingCycles'
                label='Créditos recorrentes' icon='usd' />
        </MenuTree>
    </ul>
)