import React, { useState } from 'react';
import { render } from 'react-dom';
import { AvatarDefault } from './Avatar';
import Boat from './Boat';
import Door from './Door';
import SheetData from './SheetData';
import baseData from './data';

import './style.css';

function IntroText({ dayOfMonth }) {

  const daysUntilXMas = 24 - dayOfMonth;

  return (
    <h3>Det är <span className="days-until-xmas">{daysUntilXMas}</span> dagar kvar till jul...</h3>
  );
}

function App({ data }) {
  const dayOfMonth = new Date().getDate();
  const [correctDates, setCorrectDates] = useState({ '0': true });

  /** @type {number} */
  const nCorrectDates = Object.values(correctDates).reduce((memo, isCorrect) => {
    if (isCorrect) return memo + 1;
    else return memo;
  }, 0);

  const doors = data.map((item, index) => {

    const reportIsCorrect = (/** @type {boolean} */ isCorrect) => {
      setCorrectDates(correctDates => Object.assign({}, correctDates, {
        [item.label]: isCorrect
      }));
    };

    const doorMonthDate = Number.parseInt(item.label);
    const doorNotOpen = dayOfMonth < doorMonthDate;
    const prevDoorNotCorrect = !correctDates[`${doorMonthDate - 1}`];
    const isDisabled = doorNotOpen || prevDoorNotCorrect;

    return <Door disabled={isDisabled} key={index} item={item} reportIsCorrect={reportIsCorrect} />
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

async function init() {
  const sheetData = new SheetData({
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS75Nu0iwLEzmV44rgPgcg3wzE3VlWPRfqar1pTQSX4GTU7TOr1UkwqyTUNe9aTyPv9QQ4sfiFluRD3/pub?output=csv',
    baseData
  });

  const data = await sheetData.getData();

  render(<App data={data} />, document.getElementById('app'));
}

init();