import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";

import Start from "./routes/startRoute";
import WorldMap from "./routes/worldmapRoute";
import Conversation from "./routes/ConversationRoute";
import Overview from "./routes/overviewRoute";

function App() {
  const location = useLocation()
  return (
    <div className="app">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Start />} />
        <Route path="/WorldMap" element={<WorldMap />} />
        <Route path="/Beach" element={<Overview />} />
        <Route path="/Forest" element={<Overview />} />
        <Route path="/Mountain" element={<Overview />} />
        <Route path="/Conversation" element={<Conversation />} />
      </Routes>
    </div>
  );
}

export default App;
