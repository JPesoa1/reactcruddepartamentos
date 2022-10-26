import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';
import { Navigate } from 'react-router-dom';
export default class CreateDepartamento extends Component {
  state={
    status:false
  }
  cajaNumeroRef = React.createRef();
  cajanombreRef = React.createRef();
  cajaLocalidadRef = React.createRef();
  insertDepartamento = (e) => {
    e.preventDefault();
    var request = "/api/departamentos";
    var url = Global.urlDepartamento + request;
    var numero = parseInt(this.cajaNumeroRef.current.value);
    var nombre = this.cajanombreRef.current.value;
    var localidad = this.cajaLocalidadRef.current.value;
    //REACT YA PERMITE DECLARAR OBJETOS CON FORMATO JSON
    //DECLARAMOS UN OBJETO CON LAS PROPIEDADES DEL API JSON
    var departamento = {
      numero: numero,
      nombre: nombre,
      localidad: localidad
    };

    axios.post(url,departamento).then(res=>{
      this.setState({
        status:true
      })
    });
  }
  render() {
    if (this.state.status == true){
      return (<Navigate to="/"/>);
    }
    return (
      <div>
        <h1>Create Departamento</h1>
            <form style={{width: "500px", margin: "0 auto"}}>
              <label>Número: </label>
              <input type="number" className='form-control'
                ref={this.cajaNumeroRef} required/><br/>
              <label>Nombre: </label>
              <input type="text" className='form-control'
                ref={this.cajanombreRef} required/><br/>
              <label>Localidad: </label>
              <input type="text" className='form-control'
                ref={this.cajaLocalidadRef} required/><br/>
              <button className='btn btn-info' onClick={this.insertDepartamento}>
                Insertar departamento
              </button>
            </form>
      </div>
    )
  }
}
