import "./App.css";
import Challenge from "./Challenge";
import Instructions from "./Instructions";

function App() {
  return (
    <div>
      <Instructions />
      <div className="challenge-container">
        <Challenge />
      </div>
    </div>
  );
}

export default App;
