import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Item, SearchItemParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchItems = createAsyncThunk<Item[], SearchItemParams>(
  'item/fetchItemsStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Item[]>(`https://63ab3f13fdc006ba605a3722.mockapi.io/items`, {
      params: pickBy(
        {
          page: currentPage,
          category,
          sortBy,
          order,
          search,
        },
        identity,
      ),
    });

    return data;
  },
);
