/* eslint-disable no-unused-vars */
import react, { useState, useRef } from 'react'

const FocusApp = () => {
  const [text, setText] = useState('')
  const inputRef = useRef()

  const handleFocus = () => {
    const input = inputRef.current
    console.log(inputRef)
    console.log(inputRef.current)
    console.log(inputRef.current.value)
    // input.value = 'Mutated value'
    input.focus()

    /* Thi is how to interact with the DOM using vanilla JS
    const input = document.getElementById('input')
    console.log(input.value)
    input.value = 'New Text'
    input.focus() */
  }

  return (
    <div>
      <input
        // id='input'
        ref={inputRef}
        type='text'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={handleFocus}>
        Focus
      </button>
      <h1>focusApp</h1>
    </div>
  )
}

export default FocusApp
