import Sidebar from "./components/Sidebar/Sidebar";
import CryptoPrices from "./components/Cards/CryptoPrices";
import PopulationGraph from "./components/Graph/PopulationGraph";
import MetaMaskWallet from "./components/MetaMask/MetaMaskWallet";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="app-container">
        <h1 id="header">Project</h1>
        <Sidebar />
        <div className="content-container">
          <div className="left">
            <PopulationGraph />
          </div>
          <div className="center">
            <MetaMaskWallet />
          </div>
          <div className="right">
            <CryptoPrices />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
