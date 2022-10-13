import { useEffect } from 'react'
import L from 'leaflet'
import * as ReactLeaflet from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const { MapContainer, MapConsumer } = ReactLeaflet

const Map = ({ children, className, ...rest }) => {
  useEffect(() => {
    ;(async function init() {
      delete L.Icon.Default.prototype._getIconUrl

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src,
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,
      })
    })()
  }, [])

  return (
    <MapContainer {...rest}>
      <MapConsumer>{(map) => children(ReactLeaflet, map)}</MapConsumer>
    </MapContainer>
  )
}

export default Map
