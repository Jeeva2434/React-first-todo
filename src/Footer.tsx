import React from 'react'

const Footer = ({length}:any) => {
  return (
    <footer>{length} {length > 1 ? 'items' : 'item'}</footer>
  )
}

export default Footer