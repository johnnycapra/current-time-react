import React from 'react';
import ReactDOM from 'react-dom';
import ClockTime from './ClockTime';

const App = () => {
  return (
    <div>
      <ClockTime />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
