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
  z-index: 8;
  right: 80px;
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
      <Label>
        Vyberte rádius vyhledávání a klikněte na místo odkud chcete hledat
        charity.
      </Label>
    </Background>
  )
}

export default Slider
