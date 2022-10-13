import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  width: 80%;
  max-width: 300px;
  background-color: #1643c1;
  padding: 10px;
  padding-bottom: 0px;
  border-radius: 6px;
  position: absolute;
  z-index: 10;
  left: 20px;
  bottom: 20px;
`
const Label = styled.label`
  color: white;
  font-weight: bold;
`
const DistanceDiv = styled.div`
  display: flex;
`
const Distance = styled.p`
  color: white;
  font-weight: bold;
  margin-left: 10px;
`

const Slider = ({ distance, setDistance }) => {
  return (
    <Background>
      <Label htmlFor="vzdalenost_slider" className="form-label">
        Rádius(km):
      </Label>
      <DistanceDiv>
        <input
          style={{ width: '70%' }}
          min={5}
          max={200}
          value={distance}
          onChange={(ev) => setDistance(ev.target.value)}
          type="range"
          className="form-range"
          id="vzdalenost_slider"
        />
        <Distance>{distance} km</Distance>
      </DistanceDiv>
    </Background>
  )
}

export default Slider
