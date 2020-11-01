import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const SinglePlayer = lazy(() => import('./pages/SinglePlayer'));
const MultiPlayer = lazy(() => import('./pages/MultiPlayer'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/singlePlayer" component={SinglePlayer} />
          <Route exact path="/multiPlayer" component={MultiPlayer} />
        </Switch>
      </Suspense>
    </Router>
  );
}
