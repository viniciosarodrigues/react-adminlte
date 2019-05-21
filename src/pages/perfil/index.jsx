import React, { Component } from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import Row from '../../common/layout/row'

import Box  from '../../common/layout/boxBody';
import BoxHeader  from '../../common/layout/boxHeader';


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
                <ContentHeader title='Edição de dados cadastrais' small='Versão 1.0' />
                <Content>
                    <Row>
                        <Box>
                            <BoxHeader>Meu perfil</BoxHeader>
                        </Box>
                    </Row>
                </Content> 
            </div>
        )
    }
}
export default Home