import Preferences from './routes/preferences/preferences.component';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import Admin from './routes/admin/admin.route';
import Interview from './routes/interview/interview.component';

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
