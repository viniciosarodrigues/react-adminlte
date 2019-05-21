import React, { Component } from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import Row from '../../common/layout/row'
import ValueBox from '../../common/widget/valueBox'
import ToDoList from '../../common/widget/toDoList';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            credit: 5416,
            debt: 4870
        }
    }

    render() {

        const {credit, debt} = this.state;

        return (
            <div> 
                <ContentHeader title='Início' small='Versão 1.0' />
                <Content>
                    <Row>
                    <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                    </Row>
                    <Row>
                        <ToDoList cols='12 4' page={0} totalPage={1} isLast={false}/>
                    </Row>
                </Content> 
            </div>
        )
    }
}
export default Home