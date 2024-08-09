import { HashRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Links from './pages/Links'
import Error from './pages/Error'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/links" element={<Links />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
