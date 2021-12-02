import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { AvatarDefault } from './Avatar';
import Boat from './Boat';
import data from './data';
import Door from './Door';

import './style.css';

function IntroText({ dayOfMonth }) {

  const daysUntilXMas = 24 - dayOfMonth;

  return (
    <h3>Det är <span className="days-until-xmas">{daysUntilXMas}</span> dagar kvar till jul...</h3>
  );
}

function App() {
  const dayOfMonth = new Date().getDate();
  const [correctDates, setCorrectDates] = useState({});
  const nCorrectDates = Object.values(correctDates).reduce((memo, isCorrect) => memo + isCorrect, 0);

  const doors = data.map((item, index) => {

    const reportIsCorrect = (/** @type {boolean} */ isCorrect) => {
      setCorrectDates(Object.assign({}, correctDates, {
        [item.label]: isCorrect
      }));
    };

    return <Door disabled={dayOfMonth < Number.parseInt(item.label)} key={index} item={item} reportIsCorrect={reportIsCorrect} />
  });

  return (
    <div className="content"> 
      <IntroText dayOfMonth={dayOfMonth} />
      <AvatarDefault />
      <div className="doors-list">
        <div className="doors-list__header">
          <Boat />
          <Boat colors={false} />
        </div>
        {doors}
      </div>
    </div>
  );
}

function init() {
  render(<App />, document.getElementById('app'));
}

init();