import style from '../Card/Card.module.css'

const CardBebidas= ({ bebida, valor, img, descrip, }) => {

    return(
        <div className={style.container1}>
          <div className={`${style.face} ${style.front}`}>
            <img src={img} alt={bebida} />
            <h2> {bebida}🍻  </h2>
          </div>
          <div className={`${style.face} ${style.back}`}>
            <h2> $ {valor}</h2>
            <p>{descrip}</p>
          </div>
  
      </div>
    );
  };

export default CardBebidas;
