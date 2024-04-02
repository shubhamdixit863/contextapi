import React from 'react'
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const Data = () => {
  const context=useContext(ThemeContext);

  return (
    <div>Data - {context.something}</div>
  )
}

export default Data