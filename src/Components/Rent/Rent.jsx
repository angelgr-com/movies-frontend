import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../Button/Button';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Rent = (props) => {

  let navigate = useNavigate();

  const rent = async () => {
    let body = {
      id_movie: props.id,
      id_user: props.user,
    }
    console.log('body: ',body);
    let config = {
      headers: { Authorization: `Bearer ${props.token}` }
    };

    // Saves movies in the database to enable orders
    try {
      await axios.get(API_BASE_URL + 'movies/add/' + props.id);
    } catch (error) {
      console.log(error)
    }

    try {
      let res = await axios.post(API_BASE_URL + 'orders', body, config);

      if(res) {
        navigate("/");
      }
    }
    catch (error) {
        console.log('error: ', error)
    }
  }

  return (
      <Button text="Rent" onClick={()=>rent()} />
  )
}

export default Rent;