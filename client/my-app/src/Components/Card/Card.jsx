import style from '../Card/Card.module.css'

const Card = ({ id, pizza, precio, imagen, descripcion }) => {

    return(
        <div className={style.container1}>
          <div className={`${style.face} ${style.front}`}>
            <img src={imagen} alt={pizza} />
            <h2> {pizza} 🍕 </h2>
          </div>
          <div className={`${style.face} ${style.back}`}>
            <h2> $ {precio}</h2>
            <p>{descripcion}</p>

          </div>
      </div>
    );
  };

export default Card;
