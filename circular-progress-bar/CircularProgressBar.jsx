import { useEffect, useRef, useState } from 'react'
import './circularProgressBar.scss'

function CircularProgressBar ({ targetDegree, color }) {
  const [degree, setDegree] = useState(0)

  //!
  const [newColor, setNewColor] = useState('#0000ff')
  const circleRef = useRef(null)

  //!
  let newTargetDegree
  if (!targetDegree) newTargetDegree = 81
  else newTargetDegree = targetDegree

  useEffect(() => {
    if (circleRef.current) {
      console.log(circleRef.current)
      const dataDegree = circleRef.current.dataset.degree
      const dataColor = circleRef.current.dataset.color
      console.log('Degree:', dataDegree)
      console.log('Color:', dataColor)

      const interval = setInterval(() => {
        setDegree((prevDegree) => {
          if (prevDegree >= 25) setNewColor('#ff6600')
          if (prevDegree >= 50) setNewColor('#ffff00')
          if (prevDegree >= newTargetDegree) {
            clearInterval(interval)
            return prevDegree
          }
          return prevDegree + 1
        })
      }, 50)
    }
  }, [])

  return (
    <div className='circular-progress__container'>
      <div
        ref={circleRef}
        className='circle'
        data-degree={targetDegree || newTargetDegree}
        data-color='#ff2972'
        style={{ background: `conic-gradient(${newColor} ${degree}%, #222 0%)` }}
      >
        <h2 className='number'>
          {degree}
          <span>%</span>
        </h2>
        <h4>JS</h4>
      </div>
    </div>
  )
}
export default CircularProgressBar
