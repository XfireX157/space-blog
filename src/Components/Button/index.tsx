import { IButton } from 'Types/IButton'

export default function Button({children, classname, onClick}: IButton) {
  return (
    <button type='button' onClick={onClick} className={classname}>
        {children}
    </button>
  )
}
