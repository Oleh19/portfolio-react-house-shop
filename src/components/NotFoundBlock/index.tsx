import { FC } from 'react';
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Nothing found
      </h1>
      <p className={styles.description}>
      Unfortunately, the page is not available in our online store
      </p>
    </div>
  );
};