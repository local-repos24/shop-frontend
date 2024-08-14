import { useEffect, useState } from 'react';
import {BrowserRouter} from 'react-router-dom'


//components
import RouterApp from './components/router/Router';

function App() {
  return(
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  );
}

export default App;
