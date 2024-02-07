import React, { useState } from 'react'
export const App = () => {

  const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
  const Api_Key = '7131ac258c07d46ab5c42ec1540a1920'
  const difKelvin = 273.15

  const [ciudad, setCiudad] = useState('')
  const [dataClima, setDataClima] = useState(null)

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (ciudad.length > 0) fetchClima()
  }

  const fetchClima = async () => {
    try {
      // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${Api_Key}`)
      const data = await response.json()
      setDataClima(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      <div className='grid justify-center  border border-gray-300 rounded-md'>
        <header className='grid place-items-center m-8'>
          <h1 className='text-2xl font-bold text-blue-500'>Aplicacion del Clima</h1>
        </header>
        <nav>
          <form onSubmit={handleSubmit}>
            <input
              className='border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500'
              type="text"
              value={ciudad}
              onChange={handleCambioCiudad}
            />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Buscar</button>
          </form>
        </nav>
        {
          dataClima && (
            <section className='grid place-items-center py-4'>
              <h2>{dataClima.name}, {dataClima?.sys.country}</h2>
              <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}°C</p>
              <p>Condicion Meteorologica: {dataClima?.weather[0]?.description}</p>
              <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} />
            </section>
          )
        }
      </div>
    </>
  )
}
