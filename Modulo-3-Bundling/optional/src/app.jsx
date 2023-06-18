import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
console.log('Im in mode', process.env.ENV);
root.render(
  <div>
    <h1>Hello World</h1>
  </div>
);
