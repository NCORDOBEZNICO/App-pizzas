import style from "../Home/Home.module.css"
import Cards from '../Cards/Cards'
import NavBar from '../NavBar/NavBar'
import Footer from "../Footer/Footer"
import CardsBebida from "../CardsBebida/CardsBebida"

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className={style.containerTitle}>
                <h4 className={style.tittle}>Nuestros Productos:</h4>
            </div>
            <Cards />
            <div className={style.containerTitle}>
                <h4 className={style.tittle}>Bebidas:</h4>
            </div>
            <CardsBebida />
            <Footer />
        </div>
    )
}

export default Home;