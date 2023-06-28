import axios from 'axios'
import { useParams } from 'react-router-dom';



const Detail = ({ id }) => {
    const [obj, setObj] = useState([]);
    const params = useParams()
  
    useEffect(() => {
      axios.get(`http://localhost:3001/usuarios/${id}`)
        .then(response => {
          setObj([response.data]); // Almacenar el usuario en un array
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, [id]);
  
    return (
        <div>
        {obj.map(user => (
          <div key={user.id}>
            <p>Nombre: {user.nombre}</p>
            <p>Apellido: {user.apellido}</p>
            <p>Edad: {user.edad}</p>
            {/* Renderizar otros datos del usuario aquí */}
          </div>
        ))}
      </div>
    );
  }