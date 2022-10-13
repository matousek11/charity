import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { filterCharitys, loadData } from '../src/services/DataService'
import Table from '../src/modules/common/Table'
import Slider from '../src/modules/common/Slider'

const containerStyle = {
  width: '100%',
  height: '95vh',
}

const center = {
  lat: 50.399491,
  lng: 15.615315,
}

const handleClick = (ev, data, maxDistance, setIsVisible) => {
  console.log(data)
  const lat = ev.latLng.lat()
  const lng = ev.latLng.lng()
  const filteredData = filterCharitys(lng, lat, maxDistance, data)
  console.log(filteredData)
  setIsVisible(true)
}

const map = () => {
  const [data, setData] = useState()
  const [distance, setDistance] = useState(50)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    loadData().then((data) => setData(data))
  }, [])

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyByft-k4seLg0milNzy2vE4oSEjhRmjjAY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={(ev) => handleClick(ev, data, distance, setIsVisible)}
        ></GoogleMap>
        <Slider distance={distance} setDistance={setDistance} />
      </LoadScript>
      {isVisible && <Table data={data} />}
    </div>
  )
}

export default map
