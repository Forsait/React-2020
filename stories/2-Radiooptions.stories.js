import React from 'react';
import R from '../src/app/components/common/Radiobuttons';

export default {
  title: 'Radiobuttons',
  component: R,
};

const options = {
  title: 'Title',
  list: [
    {
      key: 'key',
      title: 'title',
    },
    {
      key: 'key 1',
      title: 'title 1',
    },
  ],
};

export const Radiobuttons = () => {
  return <div style={{backgroundColor:'#555', padding: '20px'}}>
    <R
      title={options.title}
      list={options.list}
      change={console.log}
    />
  </div>
};