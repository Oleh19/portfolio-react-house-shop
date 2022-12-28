import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Categories, Sort, ItemBlock } from '../components';

import Skeleton from '../components/ItemBlock/Skeleton';

import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import { selectItemData } from '../redux/item/selectors';
import { setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { fetchItems } from '../redux/item/asyncAction';

const Home:FC = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(selectItemData);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

  const onChangeCategory = useCallback((idx: any) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page: any) => {
    dispatch(setCurrentPage(page));
  };

  const getItems = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue;

    dispatch(
      fetchItems({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getItems();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const houseItem = items.map((obj:any) => <ItemBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">All houses</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Error 😕</h2>
          <p>Something wrong. Try later</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : houseItem}</div>
      )}
    </div>
  );
};

export default Home;