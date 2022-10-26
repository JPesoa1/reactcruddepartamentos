import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class ModifyDepartamento extends Component {
  cajaNumeroRef = React.createRef();
  cajaNombreRef = React.createRef();
  cajaLocalidadRef = React.createRef();
  state = {
      departamento: {},
      status: false
  }
  buscarDepartamento = () => {
      var id = this.props.id;
      var request = "/api/departamentos/" + id;
      var url = Global.urlDepartamento + request;
      axios.get(url).then(response => {
          this.setState({
              departamento: response.data
          });
      });
  }
  updateDepartamento = (e) => {
      e.preventDefault();
      var num = parseInt(this.cajaNumeroRef.current.value);
      var nom = this.cajaNombreRef.current.value;
      var loc = this.cajaLocalidadRef.current.value;
      var data = {
          numero: num,
          nombre: nom,
          localidad: loc
      };
      var request = "/api/departamentos";
      var url = Global.urlDepartamento + request;
      axios.put(url, data).then(response => {
          this.setState({
              status: true
          });
      });
  }
  componentDidMount = () => {
      this.buscarDepartamento();
  }



  render() {
    return (
      <div>
         <h1>Update Departamento</h1>
            {
                this.state.status == true && 
                (<h1 style={{color:"blue"}}>Departamento modificado!!!</h1>)
            }
            <form style={{width: "500px", margin: "0 auto"}}>
                <input type="hidden" value={this.state.departamento.numero}
                    ref={this.cajaNumeroRef}/>
                <label>Nombre: </label>
                <input type="text" className='form-control'
                    defaultValue={this.state.departamento.nombre}
                    ref={this.cajaNombreRef}/><br/>
                <label>Localidad: </label>
                <input type="text" className='form-control'
                    defaultValue={this.state.departamento.localidad}
                    ref={this.cajaLocalidadRef}/><br/>
                <button className='btn btn-info'
                    onClick={this.updateDepartamento}>
                    Modificar departamento
                </button>
            </form>

      </div>
    )
  }
}
