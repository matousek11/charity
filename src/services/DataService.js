export const loadData = async () => {
  let data = await fetch(
    'https://services6.arcgis.com/ogJAiK65nXL1mXAW/arcgis/rest/services/Veřejné_sbírky/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson'
  )
    .then((response) => response.json())
    .then((data) => {
      return data.features
    })
  return data
}

export const filterCharitys = (maxDistance, charitys) => {
  charitys.forEach((charity) => {
    console.log(charity.properties.x)
    console.log(charity.properties.y)
  })
}
