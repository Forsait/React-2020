import React from 'react';
import Link from 'next/link'

import { getYear } from '../../utils/date';
import styles from './Movie.module.scss';

export default function Movie(props) {
  return (
    <div className={styles.film_item}>
      <img className={styles.film_poster} src={props.data.poster_path}/>
      <div className={styles.movie_info}>
        <Link href="/movieinfo/[id]" as={`/movieinfo/${props.data.id}`}>
          <a>{props.data.title}</a>
        </Link>
        <span className={styles.movie_date}>{getYear(props.data.release_date)}</span>
      </div>
      <div className={styles.genre}>{props.data.genres[0]}</div>
    </div>
  )
}