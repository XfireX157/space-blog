import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from './Register.module.scss'
import http from "../../http"

export default function Register() {
  const navigate = useNavigate()

  const onChangeForm = (e: any) => {
    setForms({ ...forms, [e.target.name]: e.target.value })
  }

  const [forms, setForms] = useState<any>({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState({
    errorCaracter: false,
    errorVazior: false
  })

  const values = {
    email: forms.email,
    password: forms.password
  }

  const handleClick = async (e: any) => {
    e.preventDefault()

    if (!forms.email.length || !forms.password && forms.password.length < 8) {
      setError({ ...error, errorVazior: true })
    } else if (forms.password.length !== forms.confirmPassword.length) {
      setError({ ...error, errorCaracter: true })
    }
    else {
      await http.post("/login", values)
        .then((respons) => {
          console.log(respons.data)
          alert(respons.data.msg)
          setTimeout(() => {
            navigate('/Login')
          }, 2000)

        }).catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <form onSubmit={handleClick} className={styles.Form}>
      <div className={styles.Form__inputs}>
        <label htmlFor="">E-mail</label>
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          onChange={onChangeForm}
        />
      </div>
      {error.errorVazior && <span className={styles.Form__error}>Esse campo não pode está vazio</span>}
      <div className={styles.Form__inputs}>
        <label htmlFor="">Senha</label>
        <input
          type="text"
          placeholder="Senha"
          name="password"
          onChange={onChangeForm}
        />
      </div>
      {error.errorVazior && <span className={styles.Form__error}>Esse campo não pode está vazio</span>}
      <div className={styles.Form__inputs}>
        <label htmlFor="">Confirma Senha</label>
        <input
          type="text"
          placeholder="Confirma senha"
          name="confirmPassword"
          onChange={onChangeForm}
        />
      </div>
      {error.errorCaracter && <span className={styles.Form__error}>Digite a senha corretamente</span>}
      <button type="submit">Enviar</button>
    </form>
  )
}
