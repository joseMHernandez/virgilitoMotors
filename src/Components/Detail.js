import React, { useState } from 'react'
import '../Components/detail.css'
import Card from './Card'
import data from '../data'

import Nav from '../Components/Nav'
const Detail = () => {

    const [input, setinput] = useState('')


  return (
    <>
    
    <Nav
    input={input}
    setinput={setinput}
    />
<div className='container'>


     {
        input === '' ?  <p className='modal'>Ingresa Vehiculo en el Buscador</p>
             : 
        
      data.filter((item)=>{
        return input.toLowerCase() === '' ? input : item.modelo.toLowerCase().includes(input)
      }).map(({id,img, modelo, vehiculo, year, color, millas, precio, estado })=>{
        return ( 
        <Card
        key={id}
        img={img}
        modelo={modelo}
        vehiculo={vehiculo}
        year={year}
        color={color}
        millas={millas}
        precio={precio}
        estado={estado}
        />)
      }) 
     }
</div>
    </>
  )
}

export default Detail