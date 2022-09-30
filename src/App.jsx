import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sale from "./components/Sale";

function App() {
  return (
    <>
      <h1 className="text-center">Sales for this month</h1>
      <div className="App  d-flex align-items-center justify-content-center">
        <Sale />
      </div>
    </>
  );
}

export default App;
