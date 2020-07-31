// @flow
import React from 'react';
import type { Node } from 'react';

type Props = {
  className: string,
  children: Node,
};

export default function Westside(props: Props) {
  return (
    <div className={`westside ${props.className || ''}`}>
      {props.children}
    </div>
  );
}
