// @flow
import React, { useEffect, useRef } from 'react';

// $FlowFixMe
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  radio_container: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    opacity: 0.8,
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 500,
    letterSpacing: '0.89px',
    lineHeight: '19px',
  },

  radio_list: {
    marginLeft: '20px',
  },

  radio_item: {
    position: 'relative',
    fontSize: '15px',

    '&:first-child': {
      '& span': {
        borderRadius: '5px 0 0 5px',
      },
    },

    '&:last-child': {
      '& span': {
        borderRadius: '0 5px 5px 0',
      },
    },

    '& span': {
      display: 'inline-block',
      padding: '8px 20px',
      backgroundColor: 'rgba(66,66,66,0.68)',
      cursor: 'pointer',
    },

    '& input': {
      position: 'absolute',
      width: 0,
      height: 0,
      opacity: 0,
    },

    '$ input:checked': {
      '& ~span': {
        backgroundColor: '#f65261',
      },

    },
  },

  title: {
    opacity: 0.8,
    fontSize: '15px',
    letterSpacing: 0,
    lineHeight: '19px',
  },
});

interface Radio {
  key: string,
  title: string,
}

interface Props {
  className: string,
  title: string,
  list: Radio[],
  change: (e: any) => void,
}

export default function Radiobuttons(props: Props) {
  const classes = useStyles();
  const innerRef = useRef(null);

  const changeRadio = (e: any) => {
    props.change(e.target.value);
  };

  useEffect(() => {
    const div = innerRef.current;
    // $FlowFixMe
    div.addEventListener('change', changeRadio);
    return () => {
      // $FlowFixMe
      div.removeEventListener('change', changeRadio);
    };
  }, []);

  const { list, title, className } = props;

  const arr = list.map((item, i) => {
    const id = title + i;
    return (
      /* eslint-disable */
      <label key={id} className={classes.radio_item}>
        <input type="radio" name={title} value={item.key} id={id} defaultChecked={i === 0} />
        <span>{item.title}</span>
      </label>
    );
  });

  return (
    <div className={`${classes.radio_container} r-radio ${className}`}>
      <span className={classes.title}>{title}</span>
      {/* $FlowFixMe */}
      <div className={classes.radio_list} ref={innerRef}>
        {arr}
      </div>
    </div>
  );
}
