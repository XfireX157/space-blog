import { BsPen, BsFillTrashFill } from "react-icons/bs";
import { ICards } from "Types/ICards";
import { AiOutlineHeart } from "react-icons/ai";
import { useAppDispatch } from "Hook/useTypedSelector";
import { deletItems } from "Store/Redux/itemsSlice";
import token from "http/Token";
import React from "react";

interface IPropsCard {
  itens: ICards[];
  open: {
    modalNewList: boolean;
    modal: boolean;
    form: boolean;
    type: string;
  };
  setOpen: React.Dispatch<
    React.SetStateAction<{
      modalNewList: boolean;
      modal: boolean;
      form: boolean;
      type: string;
    }>
  >;

  url: string;
  styles: {
    readonly [styles: string]: string;
  };
  setEditItens: React.Dispatch<React.SetStateAction<null | number>>;
  loading?: boolean;
}

export default function Cards({
  styles,
  itens,
  setEditItens,
  setOpen,
  open,
  url,
  loading,
}: IPropsCard) {

  const dispatch = useAppDispatch()

  const HandleEdit = (item: any) => {
    setOpen({ ...open, form: true, type: "Edite o card" });
    setEditItens(item);
  };

  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <ul className={styles.galeria__cards}>
          {itens.map((item: ICards, i: number) => (
            <li key={i} className={styles.galeria__card}>
              <img src={url + item.image} alt={item.nome} />
              <span className={styles.galeria__card__star}>
                <AiOutlineHeart fontSize={30} color="#FFF" />
              </span>
              <p className={styles.galeria__descricao}>{item.nome}</p>
              <div className={styles.galeria__card__info}>
                <p>{item.category}</p>
                <p>{item.price}</p>
                {token != null && (
                  <div className={styles.galeria__btns}>
                    <BsPen
                      className={styles.galeria__btns__icons}
                      onClick={() => HandleEdit({ ...item })}
                    />
                    <BsFillTrashFill
                      className={styles.galeria__btns__icons}
                      onClick={() => dispatch(deletItems(item.idProdutos))}
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
