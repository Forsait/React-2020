// @flow
import {
  HOME_CHANGE,
  GET_HOME_FIMLS_SUC,
} from '../actions/home';

import type { MovieData } from '../models/movie';
import type { Radio } from '../models/radio';

type Store = {
  moviesData: MovieData,
  query: string,
  searchBy: string,
  sortBy: string,
  limit: number,
  offset: number,
  searchByOptions: Radio,
  sortByOptions: Radio,
}

type Action = {
  type: String,
  payload: any,
}

export const initialState = {
  moviesData: {
    data: [],
    limit: 0,
    offset: 0,
    total: 0,
  },
  query: '',
  searchBy: 'title',
  sortBy: 'release_date',
  limit: 6,
  offset: 0,
  searchByOptions: {
    title: 'Search by',
    list: [
      {
        key: 'title',
        title: 'title',
      },
      {
        key: 'genres',
        title: 'genre',
      },
    ],
  },
  sortByOptions: {
    title: 'Sort by',
    list: [
      {
        key: 'release_date',
        title: 'release date',
      },
      {
        key: 'vote_average',
        title: 'rating',
      },
    ],
  },
};

export const homeReducer = (state: Store = initialState, action: Action) => {
  switch (action.type) {
    case HOME_CHANGE:
      return {
        ...state,
        searchBy: action.payload.searchBy,
        sortBy: action.payload.sortBy,
      };
    case GET_HOME_FIMLS_SUC:
      return {
        ...state,
        moviesData: action.payload,
      };
    default:
      return state;
  }
};
