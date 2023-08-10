import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidenav/Sidebar';
import Demographics from './pages/Reports/Demographics';
import AcitivityLog from './pages/Reports/AcitivityLog';
import Revenue from './pages/Reports/Revenue';
import Communicaitons from './pages/Configurations/Communications'
import Inbox from './pages/Configurations/Inbox';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Demographics />} />
          <Route path="/AcitivityLog" element={<AcitivityLog />} />
          <Route path="/Revenue" element={<Revenue />} />
          <Route path="/Inbox" element={<Inbox />} />
          <Route path="/communications" element={<Communicaitons />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
</>
  );
}

export default App;
