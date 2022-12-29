import Preferences from './routes/preferences/preferences.route';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.route';
import Admin from './routes/admin/admin.route';
import Interview from './routes/interview/interview.route';
import Result from './routes/results/result.route';
import NavBar from './components/navbar/navbar.component';
import ComingSoon from './routes/comingSoon/comingSoon.route';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='/mockinterview' element={<Interview />} />
        <Route path='/preferences' element={<Preferences />} />
        <Route path='/interview' element={<Interview />} />
        <Route path='/comingsoon' element={<ComingSoon />} />
        <Route path='/result' element={<Result />} />
        <Route path='/admin' element={<Admin />} />
      </Route>


    </Routes>

  );
}

export default App;
