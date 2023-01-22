import Galery from "../../Components/Galery";
import Popular from "../../Components/Popular";
import styles from './Home.module.scss'

export default function App() {
  return (
    <div className={styles.main}>
      <div className={styles.main__imagem}>
        <h1>A galeria mais completa do espaço</h1>
        <img src="https://img.olhardigital.com.br/wp-content/uploads/2020/12/espaco-sideral-viktorovpro-shutterstock.jpg" alt="A imagem da terra vista do espaço" />
      </div>
      <div className={styles.galeria}>
        <Galery />
        <Popular/>
      </div>
    </div>
  );
}
