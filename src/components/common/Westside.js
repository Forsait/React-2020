import React from 'react';

export default function Westside(props) {
  return <div className={`westside ${props.className || ''}`}>
    {props.children}
  </div>
}