import React from 'react'
import { useUser } from '../../Context/UserContext';

export default function NavBar() {

  const { toogleTheme } = useUser();



  return (
    <div className="navbar">

      <button onClick={toogleTheme}>cambiar tema NAV</button>

    </div>
  )
}
