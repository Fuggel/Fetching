import Axios from "./components/Axios";
import Fetch from "./components/Fetch";
import LocalFetch from "./components/LocalFetch";

function App() {
  return (
    <div className="App">
      <Axios />
      <Fetch />
      <LocalFetch />
    </div>
  );
}

export default App;
