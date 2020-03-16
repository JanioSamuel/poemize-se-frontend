import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Poetry from './pages/Poetry';
import New from './pages/New';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/poetry/:id" component={Poetry}/>
        <Route path="/new" component={New}/>
      </Switch>
    </BrowserRouter>
  )
}