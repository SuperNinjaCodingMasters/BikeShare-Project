import {
    default as React,
    Component,
} from 'react';

import {
    default as google,
    withGoogleMap,
    GoogleMap,
    Marker
} from 'react-google-maps';

import { 
    AxiosProvider,
    Request,
    Get,
    Delete,
    Head,
    Post,
    Put,
    Patch, 
    withAxios 
} from 'react-axios'

const googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDuw39SiC8G8-8RPZhXRSkFSQuDn9PPa_g"

const INITAL_CENTER = {lat: -25.363882,  lng: 131.044922} ;

const ClickEvent = withGoogleMap(props => (
    <GoogleMap
      ref={props.onMapMounted}
      zoom={props.zoom}
      center={props.center}
      onCenterChanged={props.onCenterChanged}
    >
      <Marker
        defaultPosition={props.center}
        title="Click to zoom"
        onClick={props.onMarkerClick}
      />
    </GoogleMap>
  ));

  

class App extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            zoom: 4,
            center: INITAL_CENTER
        }
    
        this.handleMapMounted = this.handleMapMounted.bind(this);
        this.handleCenterChanged = this.handleCenterChanged.bind(this);
        this.handleMarkerClick = this.handleMarkerClick.bind(this);
    
    }
    

    /*componentDidMount() {
        return fetch("http://api.citybik.es/v2/networks?fields=location,name")
        .then((response) => response.data.networks.forEach(function(keys) {
            var map = map;
            var latLng = new window.google.maps.LatLng(keys.location.latitude, keys.location.longitude);
            console.log(keys.location.latitude)
            var marker = new window.google.maps.Marker({
              position: latLng,
              map: map
            });         
          }))
    }*/

    componentDidMount() {
        return fetch("http://api.citybik.es/v2/networks?fields=location,name")
        .then()
    }
    

    handleMapMounted(map) {
        this._map = map;
    }

    handleMarkerClick() {
        this.setState = {
            zoom: 8
        }
    }

    handleCenterChanged() {
        const nextCenter = this._map.getCenter();
        if (nextCenter.equals(new window.google.maps.LatLng(INITAL_CENTER))) {
            return;
        }
        if (this._timeoutId) {
            clearTimeout(this._timeoutId)
        }
        this._timeoutId = setTimeout(() => {
            this.setState({ center: INITAL_CENTER})
            this._timeoutId = null
        }, 3000);
        this.setState({
            center: nextCenter
        })
    }

    componentWillUnmount() {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId)
        }
    }

    render() { 
        return (
            <div>
                <ClickEvent
                containerElement={
                    <div style={{ height: `100%`}} />
                }
                mapElement={
                    <div style={{ height: `100%`}} />
                }
                zoom={this.state.zoom}
                center={this.state.center}
                onMapMounted={this.handleMapMounted}
                onCenterChanged={this.onCenterChanged}
                onMarkerClick={this.onMarkerClick}
                />
            </div>

        );
    }
}

export default App;

