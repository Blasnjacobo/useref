/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react'

const Renders = () => {
  const [text, setText] = useState('')
  const renderRef = useRef(1)

  useEffect(() => {
    console.log(renderRef)
    renderRef.current++
    console.log(renderRef)
  })
  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <h1>Renders: {renderRef.current}</h1>
    </div>
  )
}

export default Renders
