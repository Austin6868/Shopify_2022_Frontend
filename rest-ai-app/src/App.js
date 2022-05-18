import logo from './logo.svg';
import Navigation from './components/Navigation.js'
import Home from './components/Home.js'
import Curie from './components/Curie.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='curie' exact element={<Curie/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;