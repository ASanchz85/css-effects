import './gamifyProgressBar.scss'

const GamifyProgressBar = ({ life, mana, xp }) => {
  const renderSegments = () => {
    return Array.from({ length: 10 }).map((_, index) => (
      <span
        key={index}
        className='segment'
      ></span>
    ))
  }

  return (
    <div className='progress-bars'>
      <div className='progress-bar life'>
        <label>
          <span>Level</span>
          <span>{life}%</span>
        </label>
        <div className='bar'>
          <div
            className='fill'
            style={{ width: `${life}%`, '--i': `${life}%` }}
          ></div>
          <div className='segments-overlay'>{renderSegments()}</div>
        </div>
      </div>
      <div className='progress-bar mana'>
        <label>
          <span>Unit</span>
          <span>{mana}%</span>
        </label>
        <div className='bar'>
          <div
            className='fill'
            style={{ width: `${mana}%`, '--i': `${mana}%` }}
          ></div>
          <div className='segments-overlay'>{renderSegments()}</div>
        </div>
      </div>
      <div className='progress-bar xp'>
        <label>
          <span>XP</span>
          <span>{xp}%</span>
        </label>
        <div className='bar'>
          <div
            className='fill'
            style={{ width: `${xp}%`, '--i': `${xp}%` }}
          ></div>
          <div className='segments-overlay'>{renderSegments()}</div>
        </div>
      </div>
    </div>
  )
}

export default GamifyProgressBar
