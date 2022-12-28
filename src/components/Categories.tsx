import { motion } from 'framer-motion';
import  {FC, memo} from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = ['All', 'First', 'Second', 'Fourth', 'Fifth', 'Sixth'];

export const Categories:FC<CategoriesProps> = memo(({ value, onChangeCategory }) => {
  const headerAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div initial="hidden" whileInView="visible" variants={headerAnimation}
    style={{ transitionDuration: '0.2s' }} className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </motion.div>
  );
});