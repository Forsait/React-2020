import React from 'react';
import Link from 'next/link';

import { getYear } from '../../utils/date';
import styles from './Movie.module.scss';

export default function Movie(props) {
  const { data } = props;
  return (
    <div className={styles.film_item}>
      <img className={styles.film_poster} src={data.poster_path} alt="alt" />
      <div className={styles.movie_info}>
        <Link href="/movieinfo/[id]" as={`/movieinfo/${data.id}`}>
          {/* eslint-disable */}
          <a>{data.title}</a>
        </Link>
        <span className={styles.movie_date}>{getYear(data.release_date)}</span>
      </div>
      <div className={styles.genre}>{data.genres[0]}</div>
    </div>
  );
}
