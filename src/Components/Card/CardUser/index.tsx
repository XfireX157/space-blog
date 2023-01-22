import styles from './cardUser.module.scss'
import { ICardsUser } from 'Types/ICards'

export default function CardUser({ src, alt, onClick, children }: ICardsUser) {
    return (
        <div className={styles.Card}>
            <img src={src} alt={alt} />
            <button type='button' onClick={onClick}>{children}</button>
        </div>
    )
}
