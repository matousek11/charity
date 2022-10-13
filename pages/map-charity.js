import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import Head from 'next/head'
import styled from 'styled-components'
import {
  filterCharitys,
  loadData,
  returnCharitys,
} from '../src/services/DataService'

const containerStyle = {
  width: '100%',
  height: '95vh',
}

const center = {
  lat: 50.399491,
  lng: 15.615315,
}

const handleClick = (ev, data) => {
  console.log(data)
  const lat = ev.latLng.lat()
  const lng = ev.latLng.lng()
  const filteredData = filterCharitys(lng, lat, 30, data)
  console.log(filteredData)
}

const map = () => {
  const [data, setData] = useState()

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
          onClick={(ev) => handleClick(ev, data)}
        >
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

<label for="vzdalenost_slider" class="form-label">Dosah</label>
<input type="range" class="form-range" id="vzdalenost_slider"></input>

export default map
