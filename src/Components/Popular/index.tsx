import styles from './Popular.module.scss'
import popular from '../../Mock/popular.json'

export default function Popular() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>
            {popular.map(item => (
                <li key={item.id}>
                    <img src={item.path} alt={item.alt}/>
                </li>
            ))}
        </ul>
        <button>Ver mais</button>
    </aside>
  )
}
