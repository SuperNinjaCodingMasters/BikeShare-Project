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
import * as APIHelpers from "./utils/APIHelpers";


const googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDuw39SiC8G8-8RPZhXRSkFSQuDn9PPa_g"

const INITAL_CENTER = {lat: -25.363882,  lng: 131.044922} ;

// const markedMap = withGoogleMap(props => (
//     <GoogleMap
//       ref={props.App.onMapMounted}
//       zoom={3}
//       center={{lat: App.componentDidMount.keyLat, lng: App.componentDidMount.keyLng}}
//       onCenterChanged={props.App.onCenterChanged}
//     >
//       <Marker
//         defaultPosition={props.center}
//         title="Click to zoom"
//         onClick={props.App.onMarkerClick}
//       />
//     </GoogleMap>
//   ));

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
                <markedMap
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
