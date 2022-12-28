import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const FullHouse: FC = () => {
  const [house, setHouse] = useState<{
    imageUrl: string;
    title: string;
    price: number;
    secondImg: string;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchHouse() {
      try {
        const { data } = await axios.get('https://63ab3f13fdc006ba605a3722.mockapi.io/items/' + id);
        setHouse(data);
      } catch (error) {
        alert('Error');
        navigate('/');
      }
    }

    fetchHouse();
  }, []);

  if (!house) {
    return <>Loading...</>;
  }

  return (
    <div className="container">
      <div className=""></div>


      {/* <img src={house.imageUrl} alt="house" />
      <h2>{house.title}</h2>
      <h4>{house.price} $</h4>
      <img src={house.secondImg} alt="foto of house" />
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Back</span>
        </button>
      </Link> */}
    </div>
  );
};

export default FullHouse;
