import logo from './logo.svg';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />}/>
        </Routes>
      </HashRouter>
</div>
  );
}

export default App;
