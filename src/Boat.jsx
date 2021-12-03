import React from 'react';

export default function Boat({ colors = true }) {

  /** @type {React.CSSProperties} */
  const style = {
    filter: colors ? '' : 'grayscale(100%)',
  };

  return (
    <div style={style} className="boat" />
  );
}