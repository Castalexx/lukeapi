import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Result = ({typeOfData, setTypeOfData, lista, setLista}) => {

  const {ide} = useParams()
  // const pedidoApiUrl = () => {
    
  // }

  if (ide !== undefined) {
    const newide = Number(ide)
    if (isNaN(newide)) {
      setTypeOfData('404')
    } else {
      const pedidoApi = async (ide) => {
        axios.get(`https://swapi.dev/api/people/${ide}`)
        .then((res) => setLista(res.data))
        .then(() => setTypeOfData('people'))
      }
      pedidoApi(ide)
    }
    }
    

  switch(typeOfData) {
    case '404':
      return (
        <div>
          <p>Error 404</p>
          <p>The params of url must be a <span className='text-danger'>Number</span></p>
        </div>
      )
    case 'id':
      return (
        <div>
          <p className='text-warning'>Favor llene el id</p>
          <p>{ide}</p>
        </div>
      )
    case 'error':
      return (
        <div>
          <p className='text-warning'>Estos no son los droides que está buscando  </p>
          <img className='img-redonda' src="https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png" alt="" />
        </div>
      );
      break;
    case 'people':
      return (
        <div>
          <h3>Name: {lista.name}</h3>
          <p>Birth Year: {lista.birth_year}</p>
          <p>Skin Color: {lista.skin_color}</p>
          <p>Eyes Color: {lista.eye_color}</p>
        </div>
        
      );
      break;
    case 'films':
      return (
        <div>
          <h3>{lista.title}</h3>
          <p>Director: {lista.director}</p>
          <p>Producer: {lista.producer}</p>
          <p>Release Date: {lista.release_date}</p>
        </div>
      )
      break;
    case 'starships':
      return (
        <div>
          <h3>{lista.name}</h3>
          <p>Model: {lista.model}</p>
          <p>Manufacturer: {lista.manufacturer}</p>
          <p>Capacity: {lista.passengers}</p>
        </div>
      );
      break;
    case 'vehicles':
      return (
        <div>
          <h3>{lista.name}</h3>
          <p>Model: {lista.model}</p>
          <p>Manufacturer: {lista.manufacturer}</p>
          <p>Capacity: {lista.passengers}</p>
        </div>
        
      )
      break;
    case 'species':
      return (
        <div>
          <h3>{lista.name}</h3>
          <p>Classification: {lista.classification}</p>
          <p>Designation: {lista.designation}</p>
          <p>Average Height: {lista.average_height}</p>
        </div>
        
      )
      break;
    case 'planets':
      return (
        <div>
          <h3>{lista.name}</h3>
          <p>Climate: {lista.climate}</p>
          <p>Gravity: {lista.gravity}</p>
          <p>Terrain: {lista.terrain}</p>
        </div>
        
      )
      break;
  }
}


export default Result