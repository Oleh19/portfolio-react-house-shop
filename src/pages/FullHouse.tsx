import axios from 'axios';
import { motion } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const FullHouse: FC = () => {
  const [leftWidth, setLeftWidth] = useState(0);
  const [house, setHouse] = useState<{
    imageUrl: string;
    title: string;
    price: number;
    secondImg: string[];
  }>();

  const carousel: any = useRef(0);

  useEffect(() => {
    setLeftWidth(carousel.current.scrollWidth + carousel.current.offsetWidth);
  }, []);

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

  const textAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const imageAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const carouselAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  const photos = house.secondImg.map((photo, index) => (
    <motion.div className="item" key={index}>
      <img src={photo} alt="house" />
    </motion.div>
  ));

  return (
    <>
      <div className="full-item">
        <motion.div
          variants={imageAnimation}
          initial="hidden"
          whileInView="visible"
          className="image-block">
          <img className="full-image" src={house.imageUrl} alt="house" />
          <div className="price">
            <h3>{house.title}</h3>
            <h3>Price: {house.price} $</h3>
            <Link className="bot-container" to="/">
              <button className="button button--outline button--add">
                <span>Back</span>
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam iste, cum,
          excepturi mollitia officiis deserunt consequuntur quisquam ut a dolore vero doloribus rem
          voluptas, nam aliquid suscipit! Voluptates, sapiente! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugit laudantium, consequuntur quam perferendis beatae
          deserunt iste est odio recusandae voluptas temporibus corporis aperiam, blanditiis
          cupiditate in vel eius ea molestiae? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Rerum at alias dolor minima cum est facere blanditiis? Iusto ad, eveniet expedita
          ullam delectus, quisquam excepturi fugit voluptatibus laborum suscipit enim!
        </motion.div>
      </div>

      <motion.div
        className="carousel"
        variants={carouselAnimation}
        initial="hidden"
        whileInView="visible">
        <motion.div
          
          className="inner-carousel">
          {photos}
        </motion.div>
      </motion.div>
    </>
  );
};

export default FullHouse;

{
  /* <motion.div className="carousel" variants={carouselAnimation}
          initial="hidden"
          whileInView="visible">
        <motion.div ref={carousel} whileTap={{ cursor: 'grabbing' }}
          drag="x"
          dragConstraints={{ right: 0, left: -leftWidth }}
          className="inner-carousel">
          {photos}
        </motion.div>
      </motion.div> */
}
