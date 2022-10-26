import React, { Component } from 'react'

export default class DetailsDepartamento extends Component {
  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>{this.props.numero}</h1>
        <h1 style={{color:"red"}}>{this.props.nombre}</h1>
        <h1 style={{color:"black"}}>{this.props.localidad}</h1>
      </div>
    )
  }
}
