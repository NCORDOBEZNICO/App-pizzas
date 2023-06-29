import { Link } from "react-router-dom";
import style from '../Landing/Landing.module.css'

const Landing = () => {
    return(
        <div className={style.containerMain}>
            <div className={style.containerChild}>
                <h1> 🍕  Loco por la pizza 🍕 </h1>
                <Link to='/home'>
                <button className={style.boton}>Ingresar</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;