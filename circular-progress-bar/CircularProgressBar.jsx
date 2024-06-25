import { useEffect, useState } from 'react'
import './circularProgressBar.scss'

function CircularProgressBar ({ title = 'test', targetDegree = 100, color = 'yellow' }) {
  const [degree, setDegree] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDegree((prevDegree) => {
        if (prevDegree >= targetDegree) {
          clearInterval(interval)
          return prevDegree
        }
        return prevDegree + 1
      })
    }, 50)
  }, [])

  return (
    <div className='circular-progress__container'>
      <div
        className='circle'
        style={{
          background: `conic-gradient(${color} ${degree}%, #222 0%)`
        }}
      >
        <h2 className='number'>
          {degree}
          <span>%</span>
        </h2>
        <h4>{title}</h4>
      </div>
    </div>
  )
}
export default CircularProgressBar
