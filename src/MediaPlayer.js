/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react'
import myVideo from './vietnam.mp4'

const MediaPlayer = () => {
  const videoRef = useRef()
  const [isPlaying, setIsplaying] = useState(false)

  const handleVideo = () => {
    const video = videoRef.current
    isPlaying ? video.pause() : video.play()
    setIsplaying(!isPlaying)
  }

  return (
    <div>
      <video width='400' height='200' ref={videoRef} controls>
        <source src={myVideo} type='video/mp4' />
      </video>
      <button
        onClick={handleVideo}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  )
}

export default MediaPlayer
