import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from "./components/chat/chat";
import Chat from "./components/join/join"

function App () {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  ) 
}

export default App