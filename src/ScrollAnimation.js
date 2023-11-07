/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react'

const ScrollAnimation = () => {
  const scrollRef = useRef()
  const [background, setBackground] = useState('pink')

  useEffect(() => {
    const handleScroll = () => {
      const div = scrollRef.current
      const { y } = div.getBoundingClientRect()

      const backgroundColor = y <= 0 ? 'orange' : 'pink'
      setBackground(backgroundColor)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <div ref={scrollRef} style={{ height: '180vh', background }}>
        <h1>Scroll to change background color</h1>
      </div>
    </div>
  )
}

export default ScrollAnimation
