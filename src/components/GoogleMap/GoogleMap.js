import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import roomData from '../../RoomData/RoomData';

const mapStyles = {
  border: '1px solid',
  borderRadius: '3%',
  width: '100%',
  height: '100%'
};
export class MapContainer extends Component {
  render(props) {
    const id = this.props.mapId
     const mapSpot = roomData.find(sp => sp.spotPlaceNo === id)
     const location = mapSpot.location;
    return (
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
         initialCenter={
          location
          
         }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'GoogleApiWrapper'}
        />
        <InfoWindow
          onClose={this.onClose}
        >
          <div>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDC57obbmjaga0wztyvzYwLAg8Rhj23G80')
})(MapContainer);