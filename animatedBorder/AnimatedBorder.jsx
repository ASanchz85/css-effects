import './animatedBorder.scss'

function AnimatedBorder ({ level }) {
  const displayedTitle = level.toUpperCase().split('')

  return (
    <div className='zigzag__container'>
      <div className='zigzag'>
        {displayedTitle.map((letter, index) => (
          <div
            style={{ '--i': index }}
            key={letter + '-original-' + index}
          >
            <span>
              <b>{letter}</b>
            </span>
          </div>
        ))}
      </div>
      <div className='zigzag'>
        {displayedTitle.map((letter, index) => (
          <div
            style={{ '--i': index }}
            key={letter + '-duplicate-' + index}
          />
        ))}
      </div>
    </div>
  )
}

export default AnimatedBorder
