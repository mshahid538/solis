import './App.css';
// import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/sidenav/Sidebar';
import Demographics from './pages/Reports/Demographics';
import AcitivityLog from './pages/Reports/AcitivityLog';
import Revenue from './pages/Reports/Revenue';
import Communicaitons from './pages/Configurations/Communications'
import CommunicationPromo from './pages/Configurations/CommunicationPromo';
import CommunicationAnnouncement from './pages/Configurations/CommunicationAnnouncement'
import Inbox from './pages/Configurations/Inbox';
import Login from './components/Login/Login'; 

function App() {

  // const isLoggedIn =  false
  return (
    <>
    
          {/* <Login/> */}
      <BrowserRouter>
      {/* {isLoggedIn ? ( */}
        <>
        {/* <Routes> */}

        {/* </Routes> */}
            <Routes>
              <Route path="/" element={<Login />} />
        {/* <Header> */}
          {/* <Sidebar> */}
              <Route path="/dashboard" element={<Demographics />} />
              <Route path="/AcitivityLog" element={<AcitivityLog />} />
              <Route path="/Revenue/" element={<Revenue />} />
              <Route path="/Inbox/" element={<Inbox />} />
              <Route path="/communications/" element={<Communicaitons />} />
              <Route path="/communications/communicationspromo" element={<CommunicationPromo />} />
              <Route path="/communications/communicationannouncement" element={<CommunicationAnnouncement />} />
          {/* </Sidebar> */}
        {/* </Header> */}
            </Routes>
        </>
      {/* ) : ( */}
        <>
          {/* <Routes>
          <Route path="" element={<Login />} />
          </Routes> */}
        </>
      {/* )} */}
    </BrowserRouter>
</>
  );
}

export default App;
