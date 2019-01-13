import React, {Component} from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import './Location.css';

function RenderMap(props) {
  let position = [props.map.lat, props.map.lon];
  return (
    <Map center={position} zoom={17}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution="&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> &copy; <a href=&quot;https://carto.com/attributions&quot;>CARTO"  
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
