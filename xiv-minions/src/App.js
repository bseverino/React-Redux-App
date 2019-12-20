import React from 'react';
import { Route } from 'react-router-dom';

import logo from './img/logo.png';

import MinionPage from './components/MinionPage';
import MinionList from './components/MinionList';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className='App'>      
      <img className='logo' src={logo} alt='Final Fantasy XIV Minions' />
      <Route exact path='/' component={SearchForm} />
      <Route exact path='/' component={MinionList} />
      <Route path='/:id' component={MinionPage} />
      <div className='footer'>
          <p>©2010-2019 SQUARE ENIX CO., LTD. All Rights Reserved.</p>
      </div>      
    </div>
  );
}

export default App;
