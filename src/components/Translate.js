import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
  {
    label: 'Korean',
    value: 'ko',
  },
  { label: 'Spanish', value: 'es' },
];

export default function Translate() {
  const [text, setText] = useState('');
  const [selected, setSelected] = useState(options[0]);

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  const onInputSubmit = (e) => {
    e.preventDefault();
    console.log('Input submitted.');
  };

  return (
    <div>
      <form onSubmit={onInputSubmit} className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            type="text"
            value={text}
            onChange={onInputChange}
            placeholder="What would you like to translate?"
          />
        </div>
      </form>
      <Dropdown
        label="language"
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} selected={selected} />
    </div>
  );
}
