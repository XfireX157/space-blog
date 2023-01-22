import styles from "./Forms.module.scss";
import { useAppDispatch } from "Hook/useTypedSelector";
import { postItems, updateItems } from "Store/Redux/itemsSlice";
import { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BiDownArrowAlt } from "react-icons/bi";

export default function Forms({
  setOpen,
  open,
  editItens,
  setEditItens,
  getProducts,
  categorys
}: any) {

  const [nome, setNome] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<any>("");

  const dispatch = useAppDispatch();

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("price", price.toString());
    formData.append("category", category);
    formData.append("image", image);

    if (editItens) {
      dispatch(updateItems({
        id: editItens.idProdutos,
        data: formData
      }))
      
    } else {
      dispatch(postItems(formData));
      setOpen({ ...open, form: false });
      setEditItens(null);
      getProducts();
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleClick}
      encType="multipart/form-data"
    >
      <div className={styles.form__info}>
        {open.type === "Adicinar um card" ? (
          <p>{open.type}</p>
        ) : (
          <p>{open.type}</p>
        )}
        <button type="button" onClick={() => setOpen({ ...open, form: false })}>
          X
        </button>
      </div>
      <div className={styles.inputs}>
        <label htmlFor="nome" className={styles.inputs__text}>Nome: </label>
        <input
          type="text"
          name="nome"
          placeholder="nome"
          id="nome"
          onChange={(e: any) => setNome(e.target.value)}
        />
      </div>
      <div className={styles.inputs}>
        <label htmlFor="price" className={styles.inputs__text}>
          Preço:
        </label>
        <input
          type="text"
          name="price"
          placeholder="price"
          id="price"
          onChange={(e: any) => setPrice(e.target.value)}
        />
      </div>
      <div className={styles.inputs}>
        <label htmlFor="category" className={styles.inputs__text}>
          Categoria:
        </label>
        <div className={styles.inputs__selectStyle}>
          <select
            title="categorias"
            name="category"
            onChange={(e: any) => setCategory(e.target.value)}
            id="category"
          >
            <option></option>
            {categorys.map((item: any) => (
              <option key={item.id}>{item.categoryName}</option>
            ))}
          </select>
          <span>
            <BiDownArrowAlt />
          </span>
        </div>
      </div>
      <div className={styles.inputFile}>
        <label htmlFor="urlimg" className={styles.inputFile__previewImg}>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="Imagem da url" />
          ) : (
            <div>
              <AiOutlineFileAdd />
            </div>
          )}
        </label>
        <input
          type="file"
          placeholder="Image"
          id="urlimg"
          onChange={(e: any) => setImage(e.target.files[0])}
        />
      </div>
      <button type="submit">SALVAR</button>
    </form>
  );
}
