import React, { useEffect, useState } from 'react';

function Input({ disabled = false, expectedValue = 0, setIsCorrect }) {
  const [value, setValue] = useState('');

  const onChange = (/** @type {React.ChangeEvent<HTMLInputElement>} */ e) => {
    const value = e.target.value;
    setValue(value);
    setIsCorrect(Number.parseInt(value) === expectedValue)
  };

  /** @type {React.CSSProperties} */
  const style = {
    opacity: disabled ? 0.3 : 1
  };

  const isCorrect = Number.parseInt(value) === expectedValue;
  if (!isCorrect && value !== '') style.borderColor = 'red';
  if (isCorrect) style.borderColor = 'green';

  return (
    <input style={style} disabled={disabled} className="door__input" type="text" onChange={e => onChange(e)} value={value} />
  );
}

/**
 * 
 * @param {Object} props
 * @param {boolean} props.disabled
 * @param {import('./data').DoorItem} props.item
 * @param {(isCorrect: boolean) => void} props.reportIsCorrect
 * @returns 
 */
export default function Door({ disabled, item, reportIsCorrect }) {
  const [isRedCorrect, setIsRedCorrect] = useState(false);
  const [isBlackCorrect, setIsBlackCorrect] = useState(false);

  const isCorrect = isRedCorrect && isBlackCorrect;

  useEffect(() => {
    reportIsCorrect(isCorrect);
  }, [isCorrect]);

  /** @type {React.CSSProperties} */
  const style = {
    color: undefined,
  };

  if (isCorrect) style.color = 'green';

  return (
    <div className="door">
      <span style={style} className="door__label">{item.label}</span>
      <Input disabled={disabled} setIsCorrect={setIsRedCorrect} expectedValue={item.expectedValues.nRed} />
      <Input disabled={disabled} setIsCorrect={setIsBlackCorrect} expectedValue={item.expectedValues.nBlack} />
    </div>
  );
}
