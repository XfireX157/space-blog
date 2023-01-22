import token from 'http/Token'
import { useState } from 'react'
import { AiOutlineHome, AiOutlineLike, AiOutlineEye, AiOutlineUser } from 'react-icons/ai'
import { BiExit } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import styles from './navbar.module.scss'

export default function NavBar() {

  const location = useLocation()
  const navigate = useNavigate()

  const [active] = useState({
    userLogged: token == null
  })

  const logout = () => {
    sessionStorage.removeItem('token')
    navigate('/User')
    window.location.reload()
  }


  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={location.pathname === '/' ? styles.menu__item__active : styles.menu__item}>
          <Link to="/">
            <span className={styles.menu__icon}><AiOutlineHome /></span>
            <span>Inicio</span>
          </Link>
        </li>
        {active.userLogged ?
          <li className={location.pathname === '/User' ? styles.menu__item__active : styles.menu__item}>
            <Link to="/User">
              <span className={styles.menu__icon}><AiOutlineUser /></span>
              <span>Conta</span>
            </Link>
          </li>
          :
          <>
            <li className={location.pathname === '/Likes' ? styles.menu__item__active : styles.menu__item}>
              <Link to="/Likes">
                <span className={styles.menu__icon}><AiOutlineLike /></span>
                <span>Mais curtidas</span>
              </Link>
            </li>
            <li className={location.pathname === '/Views' ? styles.menu__item__active : styles.menu__item}>
              <Link to="/Views">
                <span className={styles.menu__icon}><AiOutlineEye /></span>
                <span>Mais vistas</span>
              </Link>
            </li>
            <li className={styles.menu__item} onClick={logout}>
              <Link to="/User">
                <span className={styles.menu__icon}><BiExit /></span>
                <span>Sair</span>
              </Link>
            </li>
          </>
        }
      </ul>
    </nav >
  )
}
