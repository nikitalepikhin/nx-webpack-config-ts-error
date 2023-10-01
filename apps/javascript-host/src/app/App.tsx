import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Routes></Routes>
    </React.Suspense>
  );
}

export default App;
