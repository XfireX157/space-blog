import styles from './Header.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { SearchCards } from 'Types/ICards'
import SearchBar from './SearchBar'
import http from '../../http'

export default function Header() {

    const location = useLocation()

    const [nome, setNome] = useState('')
    const [renderItens, setRenderItens] = useState<SearchCards[]>([])
    const [url, setUrl] = useState('')

    const getSearch = async () => {
        try {
            const response = await http.get(`search?nome=${nome}`)
            setRenderItens(response.data.result)
            setUrl(response.data.url)
        } catch (erro) {
            console.log(erro)
        }
    }

    useEffect(() => {
        getSearch()
    }, [])

    const search = () => {
        if (!nome) return [];
        return renderItens.filter(
            (item: SearchCards) =>
                item.nome!
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[^a-zA-Zs]/g, "")
                    .includes(nome)
        );
    };

    const handleAutoComplete = (value: any) => {
        setNome(value.nome)
    }

    return (
        <header className={styles.cabecalho}>
            <img src="https://www.space.gr/uploads/LOGO_white_horizontal.png" alt="Logo" />
            {location.pathname === '/' && <div className={styles.cabecalho__container}>
                <input
                    className={styles.cabecalho__input}
                    type="text"
                    placeholder="O que você procura ?"
                    onChange={(e) => setNome(e.target.value)}
                />
                <span><AiOutlineSearch /></span>
            </div>
            }
            {nome && <SearchBar searchBar={search()} url={url} handleClickAutoComplete={handleAutoComplete}/>}
        </header>
    )
}