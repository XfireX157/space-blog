import styles from "./Footer.module.scss";
import {AiFillFacebook, AiOutlineInstagram, AiFillTwitterSquare} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          title="Like para o facebook"
          href="https://www.facebook.com/AluraCursosOnline/"
          rel="noreferrer"
        >
            <span><AiFillFacebook/></span>
        </a>
        <a
          title="Like para o twitter"
          href="https://twitter.com/aluraonline?lang=en"
          rel="noreferrer"
        >
          <span><AiFillTwitterSquare/></span>
        </a>
        <a
          title="Like para o instagram"
          href="https://www.instagram.com/aluraonline/?hl=en"
          rel="noreferrer"
        >
          <span><AiOutlineInstagram/></span>
        </a>
      </div>
      <p>Desenvolvido por Alura</p>
    </footer>
  );
}