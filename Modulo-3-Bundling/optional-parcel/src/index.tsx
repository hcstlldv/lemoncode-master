import React from 'react';
import './styles.scss';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
    <div>
        <h1 className="color">Hello World from react</h1>
    </div>
);
