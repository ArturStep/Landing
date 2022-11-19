import {Route, Routes} from 'react-router-dom'

import PreLanding from "./Pages/PreLanding/PreLanding";
import Landing from "./Pages/Landing/Landing";
import Terms from "./Pages/HelpPages/Terms";
import Disclaimer from "./Pages/HelpPages/Disclaimer";
import Privacy from "./Pages/HelpPages/Privacy";

import './App.scss';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<PreLanding/>} />
        <Route path={'/landing'} element={<Landing/>} />
        <Route path={'/terms'} element={<Terms/>} />
        <Route path={'/disclaimer'} element={<Disclaimer/>} />
        <Route path={'/privacy'} element={<Privacy/>} />
      </Routes>
    </div>
  );
}

export default App;
