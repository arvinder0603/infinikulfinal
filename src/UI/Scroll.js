import React from 'react'
import { useEffect } from 'react'
import "./Scroll.css"
export const Scroll = () => {

    let path, totalLength
    useEffect(() => {
      path = document.querySelector('path')
      totalLength = path.getTotalLength()
      path.style.strokeDasharray = totalLength
      path.style.strokeDashoffset = totalLength
  
      window.addEventListener('scroll', updatePath)
  
      return () => {
        window.removeEventListener('scroll', updatePath)
      }
    }, [])
    function updatePath() {
        const scrollPosition = window.pageYOffset
        const height = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercentage = scrollPosition / height
        const drawLength = totalLength * scrollPercentage
    
        path.style.strokeDashoffset = totalLength - drawLength
      }
  return (
    <div className='line-container'>

<svg width="24" height="206" viewBox="0 0 24 206" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="11.5" rx="12" ry="11.5" fill="#5200FF"/>
<path d="M12.5 23C12.5 86.6555 12.5 122.345 12.5 186" stroke="#5200FF"/>
<ellipse cx="12" cy="196" rx="12" ry="10" fill="#5200FF"/>
</svg>

    </div>
  )
}
