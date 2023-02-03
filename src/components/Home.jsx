import React from 'react'
import Search from './Search'
import { useState } from 'react'
import Result from './Result'

const Home = () => {
  
  const [lista, setLista] = useState({})
  const [typeOfData, setTypeOfData] = useState('')
  const [type, setType] = useState('people')
  const [id, setId] = useState('')

  return (
    <div>
      <Search 
      lista={lista} 
      setLista={setLista} 
      typeOfData={typeOfData} 
      setTypeOfData={setTypeOfData}
      type={type}
      setType={setType}
      id={id}
      setId={setId}/>
      <Result 
      lista={lista} 
      setLista={setLista} 
      typeOfData={typeOfData} 
      setTypeOfData={setTypeOfData}
      type={type}
      setType={setType}
      id={id}
      setId={setId} />
    </div>
  )
}

export default Home