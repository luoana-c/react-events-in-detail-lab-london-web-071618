// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

  createCoordsArray = (event) => {
      this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render () {
    return (
      <button onClick={this.createCoordsArray}>Coords</button>
    )
  }
}
