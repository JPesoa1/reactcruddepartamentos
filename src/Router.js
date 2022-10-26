import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Departamentos from './components/Departamentos'
import CreateDepartamento from './components/CreateDepartamento'
import MenuDepartamentos from './components/MenuDepartamentos'
import DetailsDepartamento from './components/DetailsDepartamento'
import DeleteDepartamento from './components/DeleteDepartamento'
import { useParams } from 'react-router-dom'
import ModifyDepartamento from './components/ModifyDepartamento'
export default class Router extends Component {
  render() {
    function DetailsDepartamentoElement ()
    {
      var {numero,nombre,localidad}=useParams();
      return(<DetailsDepartamento numero={numero} nombre={nombre} localidad={localidad}/>)
    }

    function DeleteDepartamentoElement(){
      var {numero}=useParams();
      return(<DeleteDepartamento numero={numero}/>)
    }
    function ModifyDepartamentoElement(){
      var{numero}=useParams();
      return(<ModifyDepartamento id={numero}/>)
    }
    return (
      <div>
        <BrowserRouter>
            <MenuDepartamentos/>
            <Routes>
                <Route path='/' element={<Departamentos/>}/>
                <Route path='/create' element={<CreateDepartamento/>} />
                <Route path='/details/:numero/:nombre/:localidad' element={<DetailsDepartamentoElement/>}/>
                <Route path='/delete/:numero' element={<DeleteDepartamentoElement/>}/>
                <Route path='/modify/:numero' element={<ModifyDepartamentoElement/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
