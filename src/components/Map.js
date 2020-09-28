import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { planeIcon } from './planeIcon';
import  Control from 'react-leaflet-control';
import Button from 'react-bootstrap/Button';

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      markers:[],
    }
  }

  render() {
    return (
      <LeafletMap
        center={[35, 51]}
        zoom={5}
        maxZoom={15}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Control position="topleft" >
          <div style={{margin:'10px'}}>
        <button type="button" class="btn btn-dark">Primary</button></div>
        <div style={{margin:'10px'}}><button type="button" class="btn btn-dark">Primary</button></div>
      </Control>
        <Marker  
          draggable = {true}
          position={[35, 51]}
          icon= {planeIcon}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map