/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react'

const CopyApp = () => {
  const [text, setText] = useState('Hola!')
  const [isCopied, setIsCopied] = useState()
  const inputRef = useRef()

  const handleCopy = () => {
    const input = inputRef.current
    input.select()
    document.execCommand('copy')
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <div>
      <input
        ref={inputRef}
        type='text'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={handleCopy}>
        Copy
      </button>
      {isCopied && <h1>Input coppied</h1>}
    </div>
  )
}

export default CopyApp
