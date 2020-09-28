import L from 'leaflet';

export const planeIcon = new L.Icon({
    iconUrl: require('../static/icon/plane.png'),
    iconRetinaUrl: require('../static/icon/plane.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(20, 25),
    className: 'leaflet-div-icon'
});