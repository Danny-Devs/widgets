import React, { useState } from 'react';
import Search from './components/Search';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript library',
  },
  {
    title: 'Why use React?',
    content: 'React makes some things much easier to do',
  },
  {
    title: 'How do you use React?',
    content: 'You learn it, then use it to build your own customized projects',
  },
];

const options = [
  { label: 'The Color Red', color: 'red' },
  { label: 'The Color Green', color: 'green' },
  { label: 'A Shade of Blue', color: 'blue' },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown && (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      )}
    </div>
  );
};

export default App;
