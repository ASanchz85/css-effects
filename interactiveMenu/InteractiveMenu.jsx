import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import {
  HomeFilledIcon,
  ProfileFilledIcon,
  PlusCircleIcon,
  SettingsFilledIcon,
  ChatFilledIcon
} from '../../../../shared/components/svg'
import './studentNavbar.scss'

function StudentNavbar () {
  const markerRef = useRef(null)

  useEffect(() => {
    const activeLink = document.querySelector(
      '.student_navbar__container .active'
    )
    if (activeLink && markerRef.current) {
      const linkRect = activeLink.getBoundingClientRect()
      const navRect = activeLink
        .closest('.student_navbar__container')
        .getBoundingClientRect()

      // Set marker position based on active link position
      markerRef.current.style.left = `${linkRect.left - navRect.left}px`
      markerRef.current.style.width = `${linkRect.width}px`
    }
  }, [location.pathname])

  return (
    <nav className='student_navbar__container'>
      <ul>
        <li>
          <NavLink to='/student/home'>
            <HomeFilledIcon
              size='50px'
              cssClass='icon_student__navbar'
            />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='#'>
            <ProfileFilledIcon
              size='60px'
              cssClass='icon_student__navbar profile_icon'
            />
            <p>Account</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='#'>
            <PlusCircleIcon
              size='50px'
              cssClass='icon_student__navbar'
            />
            <p>Create</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='#'>
            <SettingsFilledIcon
              size='40px'
              cssClass='icon_student__navbar'
            />
            <p>Settings</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='#'>
            <ChatFilledIcon
              size='45px'
              cssClass='icon_student__navbar'
            />
            <p>Chat</p>
          </NavLink>
        </li>
        <div id='marker'>
          <span className='marker_text'></span>
        </div>
      </ul>
    </nav>
  )
}

export default StudentNavbar

// const marker = document.getElementById('marker')
// const list = document.querySelectorAll('ul li')

// function moveIndicator (e) {
//   marker.style.left = e.offsetLeft + 'px'
//   marker.style.width = e.offsetWidth + 'px'
// }

// list.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     moveIndicator(e.target)
//   })
// })