import React from 'react'

import { HashRouter } from 'react-router-dom'

import Routes from './routes'
import Header from '../template/header'
import SideBar from '../template/sideBar'
import Footer from '../template/footer'

import '../template/dependencies'

export default props => (
    <HashRouter>
        <div className='wrapper'>
            <Header />
            <SideBar />
            <Routes />
            <Footer />
        </div>
    </HashRouter>
)