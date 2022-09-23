import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Universe } from '../pages/Universe';
import { Exploration } from '../pages/Exploration';

export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/universe' element={<Universe />} />
      <Route path='/exploration' element={<Exploration />} />
    </Routes>
  );
};