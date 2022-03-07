import './App.css';
import Home from './Components/Home';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import ActivityList from './Components/ActivityList';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/:mood' element={<ActivityList/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
