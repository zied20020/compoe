import logo from './logo.svg';
import './App.css';
import ProfilPhoto from "./components/profile/ProfilPhoto"
import Name from "./components/profile/FullName"
import Adresse from "./components/profile/Address"

function App() {
  return (
    <div >
    <ProfilPhoto/>
    <Name/>
    <Adresse/>
    </div>
  );
}

export default App;
