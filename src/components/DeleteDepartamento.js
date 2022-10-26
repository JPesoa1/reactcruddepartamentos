import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Button } from 'bootstrap'
import { Navigate } from 'react-router-dom'
export default class DeleteDepartamento extends Component {
  state={
    status:false
  }

  eliminarDepartamento=()=>{
    var request="/api/Departamentos/"+this.props.numero;
    var url=Global.urlDepartamento+request
    axios.delete(url).then(res=>{
      this.setState({
        status:true
      })
    })
  }
  render() {
    if(this.state.status){
      return(<Navigate to="/"/>)
    }
    return (
      <div>
        <h1>DeleteDepartamento</h1>
        <h2 style={{color:"blue"}}>Numero: {this.props.numero}</h2>
        <button onClick={this.eliminarDepartamento} className="btn btn-dark">Confirmar</button>
      </div>
    )
  }
}
