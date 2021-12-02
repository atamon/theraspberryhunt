import React from 'react';
// @ts-ignore
import boat from './boat.png';

export default function Boat({ colors = true }) {

  /** @type {React.CSSProperties} */
  const style = {
    filter: colors ? '' : 'grayscale(100%)',
    backgroundImage: `url(${boat})`,
    backgroundSize: 'contain'
  };

  return (
    <div style={style} className="boat" />
  );
}