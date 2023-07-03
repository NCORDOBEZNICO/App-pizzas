import style from "../Home/Home.module.css"
import Cards from '../Cards/Cards'
import NavBar from '../NavBar/NavBar'
import Footer from "../Footer/Footer"

const Home = () => {
    return(
        <div>
            <NavBar />
            <div className={style.containerTitle}>
            <h4 className={style.tittle}>Nuestros Productos:</h4>
            </div>
            <Cards />
            <Footer />
        </div>
    )
}

export default Home;
