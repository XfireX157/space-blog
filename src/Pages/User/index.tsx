import CardUser from 'Components/Card/CardUser'
import { useNavigate } from 'react-router-dom'
import styles from './User.module.scss'

export default function User() {

  const navigate = useNavigate()

  return (
    <div className={styles.Container}>
      <CardUser
        children="Login"
        onClick={() => navigate('/Login')}
        src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
      />
      <CardUser
        children="Register"
        onClick={() => navigate('/Register')}
        src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
      />
    </div>
  )
}
