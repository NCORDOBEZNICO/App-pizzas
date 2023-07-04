import { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../CardsBebida/CardsBebida.module.css'
import CardBebidas from '../CardBebida/CardBebida';

const CardsBebida = () => {
  const [objetos, setObjetos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/usuarios')
      .then(response => {
        setObjetos(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        // Manejar el error de alguna forma adecuada
      });
  }, []);

  return (
    <div className={style.cardContainer}>
    {objetos
      .filter(objeto => objeto.hasOwnProperty('bebida', 'img', 'valor', 'descrip'))
      .map(objeto => (
        <CardBebidas
          key={objeto.id}
          img={objeto.img}
          bebida={objeto.bebida}
          valor={objeto.valor}
          descrip={objeto.descrip}
        />
      ))}
  </div>
);
      }

export default CardsBebida;

