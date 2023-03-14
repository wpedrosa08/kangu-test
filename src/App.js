import State from './components/State';
import Html from './components/Html';
import { useState } from 'react';

import './App.css';
import Effect from './components/Effect';
import EffectV2 from './components/EffectV2';
import ClassState from './components/ClassState';
import GitRepoList from './components/GitRepoList';
import GitRepoList2 from './components/GitRepoList2';
import RepoContext from './components/context/RepoContext';
import TokenContext from './components/context/TokenContext';
import Form from './components/Form';
import Count from './components/Count'

function App() {
  const [repos, setRepos] = useState([
    {
      id:1,
      name: "ola-mundo"
    }
  ])

  const [token, setToken] = useState({
    token: "ASDjnCoinascCCsoniaCSoianCsaoni"
})

  return (
    <div className="App">
      <TokenContext.Provider value={[token, setToken]}>
        <Html />
        <hr />
        <State />
        <hr />
        <ClassState />
        <hr />
        <Effect />
        <hr />
        <EffectV2 />
        <hr />
        <Form />
        <hr />
        <RepoContext.Provider value={[repos, setRepos]}>
          <GitRepoList />
          <GitRepoList2 />
        </RepoContext.Provider>
      </TokenContext.Provider>
      <hr />
      <Count />
    </div>
  );
}

export default App;
