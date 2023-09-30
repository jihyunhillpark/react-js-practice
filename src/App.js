import './App.css';
import Hello from './component/Hello';

import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <div className={styles.box}>App</div>
      <Hello></Hello>
    </div>
  );
}

export default App;
