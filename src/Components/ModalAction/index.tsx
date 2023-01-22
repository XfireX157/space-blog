import { BsPencilSquare, BsInputCursor } from 'react-icons/bs'
import { IOpen } from 'Types/Open'
import style from './ModalAction.module.scss'

export default function ModalAction({open, setOpen}: IOpen) {

  const Modal = [
    {
      icon: <BsPencilSquare />,
      title: "Criar novo card",
      onClick: () => setOpen({ ...open, form: !open.form, modalNewList: false,type:  "Adicinar um novo card"})
    },
    {
      icon: <BsInputCursor />,
      title: "Criar nova categoria",
      onClick: () => setOpen({ ...open, modalNewList: !open.modalNewList, form: false, type:  "Adicinar um novo card"})
    },
    
  ]

  return (
    <div className={style.Container}>
      <ul className={style.Container__list}>
        {Modal.map(item => (
          <li className={style.Container__list__listColum} onClick={item.onClick}>
            <span className={style.Container__list__listColum__icon}> {item.icon} </span>
            <span> {item.title} </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
