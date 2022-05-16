import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Header } from './components/header/Header';
import { Home } from './pages/home/Home';
import { Doctor } from './pages/doctor/Doctor';
import { Newdoctor } from './components/doctorForm/newdoctor/Newdoctor';
import { Pacient } from './pages/pacient/Pacient';
import { Newpacient } from './components/pacientForm/newpacient/Newpacient';
import './App.css';
import video from './assets/backvideo.mp4';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <video autoPlay loop muted playsInline className='back_video'>
          <source type='video/mp4' src={video}/>
        </video>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doctor' element={<Doctor />} />
          <Route path='/newdoctor' element={<Newdoctor />}/>
          <Route path='/pacient' element={<Pacient />} />
          <Route path='/newpacient' element={<Newpacient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
