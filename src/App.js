import logo from './logo.svg';
import './App.css';
import { useContext} from 'react';
import ThemeContext from './ThemeContext';

function App() {
  const context=useContext(ThemeContext);
  console.log(context);
  return (
    <div className="App">
      <h1>{context.data}</h1>
      
    </div>
  );
}

export default App;
