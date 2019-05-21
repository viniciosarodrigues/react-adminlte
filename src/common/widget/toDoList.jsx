import React from 'react'
import Grid from '../layout/grid'

import { Link } from 'react-router-dom'
import ToDoListItem from './toDoListItem';

export default props => (
    <Grid cols={props.cols}> 
        <div className="box box-primary">
            <div className="box-header">
                <i className="ion ion-clipboard"></i>
                <h3 className="box-title">Atividades de hoje</h3>
                <div className="box-tools pull-right">
                <ul className="pagination pagination-sm inline">
                    <li><Link hidden={props.page === 0} to="">«</Link></li>
                    <li><Link hidden={props.totalPages === 1} to="">{props.page + 1}</Link></li>
                    <li><Link hidden={props.isLast} to="">»</Link></li>
                </ul>
              </div>
            </div>

            <div className="box-body">
                <ul className="todo-list ui-sortable">
                    <ToDoListItem description="Subir os códigos fontes do Template"
                            label="danger"
                            priority="Alta" />
                    <ToDoListItem description="Levar Atena para o banho"
                        label="primary"
                        priority="Normal" />
                    <ToDoListItem description="Lavar os Pratos"
                        label="warning"
                        priority="Alarmante" />
                    <ToDoListItem description="Realizar refeição da tarde"
                        label="success"
                        priority="Baixa" />
                </ul>
            </div>
            <div className="box-footer clearfix no-border">
              <button type="button" className="btn btn-default pull-right"><i className="fa fa-plus"></i> Adicionar item</button>
            </div>
          </div>
    </Grid> 
)