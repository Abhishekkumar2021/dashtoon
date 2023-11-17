import React from 'react'
import './Error.css'

const Error : React.FC = () => {
  return (
    <div className='Error'>
      <h1>404</h1>
      <p>Page not found</p>
      <a className='button' href="/">Go back to home</a>
    </div>
  )
}

export default Error