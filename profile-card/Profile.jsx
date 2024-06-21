import './profile.scss'

function Profile () {
  return (
    <div className='main__container'>
      <div className='card-container'>
        <div className='left-container'>
          <div className='box box-left'>a</div>
          <div className='icon-bar icon-bar-left'>a</div>
          <div className='box box-left'>a</div>
        </div>
        <div className='right-container'>
          <div className='box box-right'>a</div>
          <div className='icon-bar icon-bar-right'>a</div>
          <div className='box box-right'>a</div>
        </div>
        <div className='circle'>
          <div className='imgBox'>
            <img
              src='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
              alt='profile-pic'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile
