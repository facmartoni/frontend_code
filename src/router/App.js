// ------------------------------ import libraries
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// ------------------------------ import components
import { InterestForm } from '../components/InterestForm';

// ------------------------------------ COMPONENT ------------------------------------//
// This is the router.
// This component has all the pages components

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={InterestForm} />
      </Switch>
    </BrowserRouter>
  );
};
