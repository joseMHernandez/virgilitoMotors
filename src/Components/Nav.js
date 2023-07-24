import './nav.css'
import React from 'react'

const Nav = ({input, setinput}) => {

  return (
    <>
    <nav className='nav'>
  
    <div>
      <form>

<input onSubmit={(e)=>e.preventDefault()} onChange={(e)=> setinput(e.target.value)} className='search-input' type="text" value={input}  placeholder='Ingrese Vehiculo ' />
      </form>
    </div>

    <div className='logo'>
  VirgilitoMotors
    </div>
    </nav>
    </>
  )
}

export default Nav