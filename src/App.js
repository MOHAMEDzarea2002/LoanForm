import "./App.css"
import LoanForm from "./component/lonaform"
const TITEL = "LOAN PROJECT"
function App() {
  return (
    <div className="App" >
      <LoanForm titel = {TITEL}/>
    </div>
  );
}

export default App;