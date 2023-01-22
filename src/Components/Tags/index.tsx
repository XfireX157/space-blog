import styles from './Tags.module.scss'
import { INewList } from 'Types/ICards'
import { useEffect } from 'react'
import http from '../../http'

interface IProps {
  active: string | boolean | null,
  setActive: React.Dispatch<React.SetStateAction<string | boolean | null>>
  category: INewList[]
  setCategoryMap: React.Dispatch<React.SetStateAction<INewList[]>>
}

export default function Tags({ active, setActive, category, setCategoryMap }: IProps) {

  function filtered(index: any) {
    if (active !== index.categoryName) {
      setActive(index.categoryName)
    } else {
      setActive(null)
    }
  }

  const getCategorys = async () => {
    const response = await http.get('/categorysGet')
    setCategoryMap(response.data.categorys)
  }

  useEffect(() => {
    getCategorys()
  }, [])

  const handleRemove = (id: number) => {
    http.delete(`/categorysDelete/${id}`)
      .then((data) => {
        setCategoryMap(category.filter(item => item.id !== id))
        console.log(data)
      }).catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className={styles.tags}>
      <p>Filtre por tags: </p>
      <ul className={styles.tags__lista}>
        {category.map(item => (
          <li
            key={item.categoryName}
            className={active === item.categoryName ? styles.active : ''}
            onClick={() => filtered(item)}>
            <span onDoubleClick={() => handleRemove(item.id!)}>
              {item.categoryName}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
