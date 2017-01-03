import React, { Component } from 'react';
import Map, { Marker, GoogleApiWrapper } from 'google-maps-react';

class MapDrawer extends Component {
  render() {
    const { width, height, marker, google, loaded } = this.props;
    return (
      <div className={this.props.className}>
        { loaded ?
          <Map google={google}
            zoom={14}
            containerStyle={{ width: width, height: height }}
            centerAroundCurrentLocation={true}
          >
            {marker && <Marker name={marker.get('name')} position={{ lat: marker.get('lat'), lng: marker.get('lng') }} />}
          </Map>
          :
          <div>LOADING</div>
        }
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: '',
  libraries: ['places','visualization'],
})(MapDrawer);
