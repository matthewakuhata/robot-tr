import "./App.css";
import Board from "./components/Board";
import { BoardProvider } from "./context/BoardContext";

function App() {
  return (
    <div className="App">
      <BoardProvider rows={5} cols={5}>
        <Board />
      </BoardProvider>
    </div>
  );
}

export default App;
