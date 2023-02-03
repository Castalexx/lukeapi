import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'



const Search= ({lista, setLista, type, setType, id, setId, typeOfData, setTypeOfData}) => {


  const [urlApi, setUrlApi] = useState('')

  const pedidoApi = async () => {
    if (id === '') {
      setTypeOfData('id')
    } else {
      axios.get(urlApi)
      .then(res => {
      setLista(res.data);
      setTypeOfData(type)
      })
      .catch(() => {
      setTypeOfData('error')
      })
    }
  }


  

  const submitHandler = (event) => {
    event.preventDefault();
    pedidoApi()
  }

  const refreshTypeUrl = (event) => {
    setType(event);
    setUrlApi(`https://swapi.dev/api/${event}/${id}`)
  }

  const refreshIdUrl = (event) => {
    setId(event);
    setUrlApi(`https://swapi.dev/api/${type}/${event}`)
  }

  
  return (
    <div>
      <form onSubmit={(event) => submitHandler(event)} action=''>
        <select onChange={(event) => refreshTypeUrl(event.target.value)}>
					<option value='people'>People</option>
					<option value='films' >Films</option>
					<option value='starships'>Starships</option>
					<option value='vehicles'>Vehicles</option>
					<option value='species'>Species</option>
					<option value='planets'>Planets</option>
				</select>
        <label className='m-5' htmlFor=""> ID
          <input onChange={(event) => refreshIdUrl(event.target.value)} type="number" />
        </label>
        <button className='btn btn-primary m-5'>Submit</button>
      </form>
    </div>
  )
}

export default Search