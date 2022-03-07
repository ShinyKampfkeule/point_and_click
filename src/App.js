import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";

import Start from "./routes/startRoute";
import WorldMap from "./routes/worldmapRoute";
import BeachOverview from "./routes/beach/beachOverviewRoute";
import Conversation from "./routes/ConversationRoute";
import {screen} from "@testing-library/react";

localStorage.setItem('envValue', 0)
localStorage.setItem('beachLock', false)
localStorage.setItem('forestLock', true)
localStorage.setItem('mountainLock', true)
localStorage.setItem('turtleLock', false)
localStorage.setItem('turtleQuest', true)
localStorage.setItem('turtleFirstTalk', true)
localStorage.setItem('seastartLock', true)
localStorage.setItem('seastartQuest', false)
localStorage.setItem('octopusLock', true)
localStorage.setItem('octopusQuest', false)

function App() {
  const location = useLocation()
  return (
    <div className="app">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Start />} />
        <Route path="/WorldMap" element={<WorldMap />} />
        <Route path="/Beach" element={<BeachOverview />} />
        <Route path="/Conversation" element={<Conversation />} />
      </Routes>
    </div>
  );
}

export default App;
