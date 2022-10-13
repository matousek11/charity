import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import Head from 'next/head'
import styled from 'styled-components'

const containerStyle = {
  width: '100%',
  height: '95vh',
}

const center = {
  lat: 50.399491,
  lng: 15.615315,
}

const map = () => {
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyByft-k4seLg0milNzy2vE4oSEjhRmjjAY">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={{ lat: 50.178574, lng: 15.814149 }} />
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default map
