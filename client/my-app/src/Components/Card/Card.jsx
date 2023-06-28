import style from '../Card/Card.module.css'







const Card = ({ id, pizza, precio, imagen }) => {

    return(
        <div className={style.container1}>
        <div className={style.container}>
        <img src={imagen} alt={pizza} />
        <h2> {pizza} 🍕 </h2>
        <p>$ {precio}</p>
      </div>
      </div>
    );
  };

export default Card;
