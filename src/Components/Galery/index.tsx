import { useState, useEffect } from "react";
import { ICards } from "Types/ICards";
import { INewList } from "Types/ICards";
import { useAppDispatch, useAppSelector } from "Hook/useTypedSelector";
import { getItems } from "Store/Redux/itemsSlice";
import Tags from "../Tags";
import styles from "./Galery.module.scss";
import Cards from "./Cards";
import Forms from "Components/Forms";
import Button from "Components/Button";
import token from "http/Token";
import ModalAction from "Components/ModalAction";
import DropList from "Components/DropList";

export default function Galery() {

  const [active, setActive] = useState<boolean | string | null>(null);
  const [itens, setItems] = useState<ICards[]>([]);
  const [editItens, setEditItens] = useState<number | null>(null);
  const [categoryMap, setCategoryMap] = useState<INewList[]>([]);
  const [open, setOpen] = useState({
    modalNewList: false,
    modal: false,
    form: false,
    type: "",
  });

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getItems())
  }, [dispatch]);

  const { post, loading, url } = useAppSelector((state) => state.itemsSlice);
  
  const filterItens = active
    ? post.filter((itemName) => itemName.category === active)
    : post;

  const singInCategory = (newlist: INewList) => {
    setCategoryMap([...categoryMap, { ...newlist }]);
  };

  return (
    <>
      <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags
          active={active}
          setActive={setActive}
          category={categoryMap}
          setCategoryMap={setCategoryMap}
        />
        <Cards
          loading={loading}
          itens={filterItens}
          setEditItens={setEditItens}
          url={url}
          setOpen={setOpen}
          open={open}
          styles={styles}
        />
        {open.form && (
          <Forms
            editItens={editItens}
            setEditItens={setEditItens}
            getUsers={getItems()}
            setItems={setItems}
            itens={itens}
            categorys={categoryMap}
            setOpen={setOpen}
            open={open}
          />
        )}
      </section>

      {open.modal && <ModalAction open={open} setOpen={setOpen} />}

      {open.modalNewList && (
        <DropList singInList={singInCategory} open={open} setOpen={setOpen} />
      )}

      {token != null && (
        <Button
          classname={styles.Btn}
          onClick={() =>
            setOpen({
              ...open,
              modal: !open.modal,
              type: "Adicinar um novo card",
            })
          }
        >
          +
        </Button>
      )}
    </>
  );
}