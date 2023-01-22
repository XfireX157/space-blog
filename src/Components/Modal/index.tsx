import Button from "Components/Button";
import { IModal } from "Types/IModal";
import styles from './Modal.module.scss'

export default function Modal({ icon, msg, info ,onClick }: IModal) {
  return (
    <div className={styles.Modal}>
      <span> {icon} </span>
        <h2>{info}</h2>
        <p>{msg}</p>
        <Button onClick={onClick} classname={styles.Modal__Btn}>OK!</Button>
    </div>
  )
}
