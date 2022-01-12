import React, { useState } from 'react';
import Search from './components/Search';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

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
  { label: 'The Color Red', value: 'red' },
  { label: 'The Color Green', value: 'green' },
  { label: 'A Shade of Blue', value: 'blue' },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="colors"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
