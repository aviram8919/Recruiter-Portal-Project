import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Homepage from './containers/Homepage';
import Notification from './containers/Notification';
import RightSide from './components/RightSide';
import MiddleSection from './components/MiddleSection';
import Sidebar from './components/Sidebar';
import AddCandidates from './components/AddCandidates';
import RejectJobs from './components/RejectJobs';
import DashboardContent from './components/DashboardContent';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <Router>
      
      <div className="App">

        <Hero />            {/*Container of main page*/}

        <Navbar />          {/*Navigation Bar*/}

        <section className="container">   {/*section below navbar*/}
        
          <RightSide />

          <Route path="/" exact component={DashboardContent} />   {/*Middle section view when user click on Dashboard */}

          <Route path="/content-missing" component={ComingSoon} />    {/*Middle section view when user click on Candidates */}

          <Route path="/Live-Jobs" component={MiddleSection} />        {/*Middle section view when user click on Live Jobs */}

          <Route path="/Add-candidates" component={AddCandidates} />   {/*Middle section view when user click on  Accepted Jobs */}

          <Route path="/Rejected-jobs" component={RejectJobs} />       {/*Middle section of view when user click on Rejected Jobs */}

          <Sidebar />

        </section>

      </div> 

    </Router>

  );
}

export default App;
