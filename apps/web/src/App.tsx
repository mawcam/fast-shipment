import Navbar from "./components/Navbar";
import ShipmentsList from "./components/ShipmentsList";
import useLogin from "./hooks/useLogin";
import "./App.css";
import useSubscribe from "./hooks/useSubscribe";

function App() {
  useLogin({ autoLogin: true });
  useSubscribe();

  return (
    <main>
      <Navbar />
      <div className="container">
        <h1 className="title">Shipments</h1>
        <ShipmentsList />
      </div>
    </main>
  );
}

export default App;
