import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";

import Start from "./routes/startRoute";
import WorldMap from "./routes/worldmapRoute";
import BeachOverview from "./routes/beach/beachOverviewRoute";

localStorage.setItem('envValue', 0)
localStorage.setItem('beachLock', false)
localStorage.setItem('forestLock', true)
localStorage.setItem('mountainLock', true)
localStorage.setItem('turtleLock', false)
localStorage.setItem('turtleQuest', true)
localStorage.setItem('seastartLock', false)
localStorage.setItem('seastartQuest', true)
localStorage.setItem('octopusLock', false)
localStorage.setItem('octopusQuest', true)

function App() {
  const location = useLocation()
  return (
    <div className="app">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Start />} />
        <Route path="/WorldMap" element={<WorldMap />} />
        <Route path="/Beach" element={<BeachOverview />} />
      </Routes>
    </div>
  );
}

export default App;
