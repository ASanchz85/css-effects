import './notFound.scss'

function NotFoundContent ({ degrees, yPos }) {
  const style = {
    '--d': degrees,
    '--y': yPos
  }

  return (
    <div
      className='notFound-content'
      style={style}
    >
      <div>
        <span>
          Police line do not cross - Police line do not cross - Police line do
          not cross - Police line do not cross - Police line do not cross -
          Police line do not cross - Police line do not cross - Police line do
          not cross - Police line do not cross - Police line do not cross -
          Police line do not cross - Police line do not cross - Police line do
          not cross - Police line do not cross - Police line do not cross -
          Police line do not cross - Police line do not cross -{' '}
        </span>
      </div>
      <div>
        <span>
          Police line do not cross - Police line do not cross - Police line do
          not cross - Police line do not cross - Police line do not cross -
          Police line do not cross - Police line do not cross - Police line do
          not cross - Police line do not cross - Police line do not cross -
          Police line do not cross - Police line do not cross - Police line do
          not cross - Police line do not cross - Police line do not cross -
          Police line do not cross - Police line do not cross -{' '}
        </span>
      </div>
    </div>
  )
}

function NotFound () {
  return (
    <section className='notFound'>
      <NotFoundContent degrees={25} yPos={100} />
      <NotFoundContent degrees={-25} yPos={200} />
      <NotFoundContent degrees={-5} yPos={-150} />
      <NotFoundContent degrees={-15} yPos={350} />
      <NotFoundContent degrees={15} yPos={420} />
      <NotFoundContent degrees={-15} yPos={550} />
    </section>
  )
}

export default NotFound
