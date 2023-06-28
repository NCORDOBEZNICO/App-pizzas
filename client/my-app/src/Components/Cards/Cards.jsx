import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card'

const CardList = () => {
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
    <div>
      {objetos.map(objeto => (
        <Card key={objeto.id}
            imagen={objeto.imagen}
            pizza={objeto.pizza}
            precio={objeto.precio} />
      ))}
    </div>
  );
};

export default CardList;