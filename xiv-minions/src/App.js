import React from 'react';
import { Route } from 'react-router-dom';

import MinionPage from './components/MinionPage';
import MinionList from './components/MinionList';

function App() {
  return (
    <div className='App'>      
      <h1>FFXIV Minions</h1>
        <Route exact path='/'>   
          <MinionList />
        </Route>
        <Route path='/:id'>
          <MinionPage />
        </Route>
      <div className='footer'>
          <p>©2010-2019 SQUARE ENIX CO., LTD. All Rights Reserved.</p>
      </div>      
    </div>
  );
}

export default App;
