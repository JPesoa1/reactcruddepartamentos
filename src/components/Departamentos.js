import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import load from '../assets/images/loading.gif';
import { NavLink } from 'react-router-dom';

export default class Departamentos extends Component {

  state={
    status:false,
    departamentos:[]
  }

  cargarDepartamentos=()=>{
    var request="/api/Departamentos";
    var url=Global.urlDepartamento+request

    axios.get(url).then(res=>{
      this.setState({
        status:true,
        departamentos:res.data
      })
    });
  }
  componentDidMount=()=>{
    this.cargarDepartamentos();
  }
  render() {
    if(this.state.status==false){
      return(<img src={load} alt="Cargando"/>)
    }
    return (
      <div>
        <h1>Departamentos</h1>
        <table className='table table-dark table-striped'>
          <thead>
            <tr>
              <th>NUMERO</th>
              <th>NOMBRE</th>
              <th>LOCALIDAD</th>
              <th>DELETE</th>
              <th>MODIFY</th>
              <th>DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.departamentos.map((departamento,index)=>{
                return(<tr>
                          <td>{departamento.numero}</td>
                          <td>{departamento.nombre}</td>
                          <td>{departamento.localidad}</td>
                          <td><NavLink to={"/delete/"+departamento.numero} className="btn btn-danger">Delete</NavLink></td>
                          <td><NavLink to={"/modify/"+departamento.numero} className="btn btn-info">Modify</NavLink></td>
                          <td><NavLink to={"/details/"+departamento.numero+"/"+departamento.nombre+"/"+departamento.localidad} className="btn btn-warning">Details</NavLink></td>
                      </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
