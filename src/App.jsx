import Preferences from './routes/preferences/preferences.route';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.route';
import Admin from './routes/admin/admin.route';
import Interview from './routes/interview/interview.route';

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/mockinterview' element={<Interview />} />
      <Route path='/preferences' element={<Preferences />} />
      <Route path='/interview' element={<Interview />} />
      <Route path='/admin' element={<Admin />} />


    </Routes>

  );
}

export default App;
