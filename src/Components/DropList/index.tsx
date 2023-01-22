import { useState } from 'react'
import { INewList } from 'Types/ICards'
import styles from './DropList.module.scss'
import http from '../../http'

interface IProps {
    singInList: (list: INewList) => void

    open: {
        modalNewList: boolean
        modal: boolean
        form: boolean
        type: string
    }

    setOpen: React.Dispatch<React.SetStateAction<{
        modalNewList: boolean
        modal: boolean
        form: boolean
        type: string
    }>>
   
}

export default function DropList({ singInList, open, setOpen }: IProps) {
    const [categoryName, setCategoryName] = useState('')

    const newList = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await http.post('/categorysPost', {
            categoryName: categoryName
        })
            .then((data) => {
                singInList({ categoryName: categoryName })
            })
            .catch((err) => {
                console.log(err)
            })
        setCategoryName('')
    }

    return (
        <form
            className={styles.form}
            onSubmit={newList}
            encType='multipart/form-data'>

            <div className={styles.form__info}>
                {open.type === 'Adicinar uma nova categoria' ? <p>{open.type}</p> : <p>{open.type}</p>}
                <button type='button' onClick={() => setOpen({ ...open, modalNewList: false })}>X</button>
            </div>

            <div className={styles.inputs}>
                <label
                    htmlFor='categoryName'
                    className={styles.inputs__text}>Nome da categoria:
                </label>
                <input
                    type="text"
                    name='categoryName'
                    placeholder='nome da categoria'
                    id='categoryName'
                    onChange={(e) => setCategoryName(e.target.value)} />
            </div>
            <button type='submit'>SALVAR</button>
        </form>
    )
}
