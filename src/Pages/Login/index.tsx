import styles from './Login.module.scss'
import http from '../../http'
import Modal from 'Components/Modal'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiErrorAlt } from 'react-icons/bi'
import { useDispatch } from 'react-redux'

export default function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [error, setError] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const values = {
    email: form.email,
    password: form.password
  }
  const [active, setActive] = useState({
    ModalError: false
  })

  const handleClick = async (e: any) => {
    e.preventDefault()

    if (!form.email.length || !form.password.length) {
      setError(true)
    } else {
      await http.post("/login", values)
      .then((respons) => {
        sessionStorage.setItem('token', respons.data.token)
        setForm({ ...form, email: '', password: '' })
        setTimeout(() => {
          navigate('/')
          window.location.reload()
        }, 2000)
      }).catch((err) => {
        console.log(err)
        setActive({ ...active, ModalError: true })
      })
    }
  }

  const onChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <form className={styles.Form} onSubmit={handleClick}>
        <div className={styles.Form__inputs}>
          <label htmlFor="">E-mail</label>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={onChange} />
        </div>
        {error && <span className={styles.Form__error}>Os valores não podem estar vazio</span>}
        <div className={styles.Form__inputs}>
          <label htmlFor="">Senha</label>
          <input
            type="text"
            name="password"
            placeholder="Senha"
            onChange={onChange} />
        </div>
        {error && <span className={styles.Form__error}>Os valores não podem estar vazio</span>}
        <button type="submit">Entrar</button>
      </form>
      {active.ModalError && <Modal
        info='Opss...'
        icon={<BiErrorAlt />}
        msg='Não foi possivel fazer o login, veja se a senha e o usuario estão certos'
        onClick={() => setActive({ ...active, ModalError: false })}
      />}
    </>
  )
}
