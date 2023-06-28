import { Link } from "react-router-dom";

const Landing = () => {
    return(
        <div>
            <h1>Bienvenidos a mi pagina de usuarios</h1>
            <Link to='/home'>
            <button>Ingresar</button>
            </Link>
        </div>
    )
}

export default Landing;