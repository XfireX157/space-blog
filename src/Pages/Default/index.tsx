import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import styles from './Default.module.scss'

export default function Default (){
    return (
        <main>
            <Header />
            <div className={styles.main}>
                <NavBar />
                <div className={styles.main__principal}>
                    <Outlet/>
                </div>
            </div>
            <Footer />
        </main>
    )
} 