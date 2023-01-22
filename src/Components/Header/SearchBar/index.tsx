import { SearchCards } from 'Types/ICards'
import styles from './SearchBar.module.scss'

interface IProps {
    searchBar: SearchCards[] | boolean | string | any
    url: string
    handleClickAutoComplete: (item: SearchCards) => void
}

export default function SearchBar({ searchBar, url, handleClickAutoComplete }: IProps) {
    return (
        <div className={styles.Container}>
            {searchBar.length == '' ?
                <h2>Not Found Item</h2>
                : (
                    <>
                        {searchBar.map((item: SearchCards) => (
                            <div className={styles.Container__Card} key={item.nome} onClick={() => handleClickAutoComplete(item)}>
                                <img src={url + item.image} alt='imagem do produto' />
                                <span>{item.nome}</span>
                            </div>
                        ))}
                    </>
                )
            }
        </div>
    )
}
