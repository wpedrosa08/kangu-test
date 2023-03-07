import State from './components/State';
import Html from './components/Html';

import './App.css';
import Effect from './components/Effect';
import EffectV2 from './components/EffectV2';
import ClassState from './components/ClassState';

function App() {
  return (
    <div className="App">
      <Html />
      <hr />
      <State />
      <hr />
      <ClassState />
      <hr />
      <Effect />
      <hr />
      <EffectV2 />
    </div>
  );
}

export default App;
