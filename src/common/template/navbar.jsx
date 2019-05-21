import React, { Component } from 'react'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false, user: { name: "Vinícios Rodrigues", email: "viniciosarodrigues@gmail.com"} }
    }

    changeOpen() {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { name, email } = this.state.user
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li onMouseLeave={() => this.changeOpen()}
                        className={`dropdown user user-menu ${this.state.open ? 'open' :
                            ''}`}>
                        <a href onClick={() => this.changeOpen()}
                            aria-expanded={this.state.open ? 'true' : 'false'}
                            className="dropdown-toggle"
                            data-toggle="dropdown">
                            <img src="http://lorempixel.com/160/160/abstract"
                                className="user-image" alt="User" />
                            <span className="hidden-xs">{name}</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src="http://lorempixel.com/160/160/abstract"
                                    className="img-circle" alt="User" />
                                <p>{name}<small>{email}</small></p>
                            </li>
                            <li className="user-footer">
                                <div className="pull-right">
                                    <a href 
                                        className="btn btn-default btn-flat">Sair</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Navbar