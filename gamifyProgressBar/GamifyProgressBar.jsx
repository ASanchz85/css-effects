import './gamifyProgressBar.scss'

const GamifyProgressBar = ({ life, mana, xp }) => {
  return (
    <div className='progress-bars'>
      <div className='progress-bar life'>
        <label>Life</label>
        <div className='bar'>
          <div
            className='fill'
            style={{ width: `${life}%` }}
          ></div>
          <span className='percentage'>{life}%</span>
        </div>
      </div>
      <div className='progress-bar mana'>
        <label>Mana</label>
        <div className='bar'>
          <div
            className='fill'
            style={{ width: `${mana}%` }}
          ></div>
          <span className='percentage'>{mana}%</span>
        </div>
      </div>
      <div className='progress-bar xp'>
        <label>XP</label>
        <div className='bar'>
          <div
            className='fill'
            style={{ width: `${xp}%` }}
          ></div>
          <span className='percentage'>{xp}%</span>
        </div>
      </div>
    </div>
  )
}

export default GamifyProgressBar
