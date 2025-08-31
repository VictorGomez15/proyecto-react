import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCriptos] = useState()
  
  useEffect( () => {
    axios.get(`${API_URL}coins`,
      {
        headers: {
          'X-API-KEY': 'QKckstKekQPFaSbBZ6ucs5glRC7+i2MG3y6Y54fVvOY='
        }
      }
    )
    .then((data) => {
      setCriptos(data.data.result)
    })
    .catch((error) => {
      console.error("La petición falló" , error)
    })
  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        {
          criptos.map(({id, name, price}) => (
            <li key={id}>Nombre: {name} - Precio: $ { price }</li>
          )) 
        }
      </ol>
    </>
  )
}

export default App
