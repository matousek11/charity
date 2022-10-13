import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import Head from 'next/head'
import styled from 'styled-components'
import {
  filterCharitys,
  loadData,
  returnCharitys,
} from '../src/services/DataService'
import Slider from '../src/modules/common/Slider'

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
  const [distance, setDistance] = useState(1)

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
        ></GoogleMap>
        <Slider distance={distance} setDistance={setDistance} />
      </LoadScript>
    </div>
  )
}

export default map
