import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Notes from './Pages/Notes'
import Create from './Pages/Create'
import './index.css'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Notes/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </Router>
  );
}

export default App;
