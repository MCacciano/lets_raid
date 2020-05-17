import React from 'react';

import xivapi from './utils/xivapi';

import './App.css';

const App = () => {
  const [text, setText] = React.useState('');

  return (
    <div>
      <input type='text' value={text} onChange={e => setText(e.target.value)} />
      <h2>{text}</h2>
    </div>
  );
};

export default App;
