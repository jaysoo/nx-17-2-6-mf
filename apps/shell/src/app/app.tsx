import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Feat1 = React.lazy(() => import('feat-1/Module'));

const Feat2 = React.lazy(() => import('feat-2/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/feat-1">Feat1</Link>
        </li>

        <li>
          <Link to="/feat-2">Feat2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />

        <Route path="/feat-1" element={<Feat1 />} />

        <Route path="/feat-2" element={<Feat2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
