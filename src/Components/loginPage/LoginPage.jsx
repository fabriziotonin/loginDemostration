import React from 'react'
import { useUser } from '../../Context/UserContext';

export default function LoginPage() {
  const { theme, toogleTheme } = useUser();
  const darkStyle = {
    backgroundColor: theme ? '#333' : '#CCC',
    color: theme ? "#CCC" : '#333',
    padding: '2rem',
    margin: '2rem'
  }

  return (
    <>
      <button onClick={toogleTheme}>cambiar tema</button>
      <div style={darkStyle}>
        Function theme
      </div>
    </>
  )
}
