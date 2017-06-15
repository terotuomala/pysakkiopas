import React, {Component} from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import './Location.css';

function RenderMap(props) {
  let position = [props.map.lat, props.map.lon];
  return (
    <Map center={position} zoom={17}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>
          <span>
            This is popup
          </span>
        </Popup>
      </Marker>
    </Map>
  );
}

class Location extends Component {
  render() {
    return (
      <RenderMap map={this.props.map}/>
    )
  }
}

export default Location;
