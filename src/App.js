import React from 'react';
import './App.css';
// import SignIn from './Pages/SignIn'
// import HomePage from './Pages/HomePage(App)';
import EventsPage from './Pages/EventsPage(App)';
import './Pages/signin.css'
const App=() =>{
 return (<div className='App m-auto width-1024px height-100'>
   {/* <HomePage/> */}
   {/* <SignIn/> */}
   <EventsPage/>
 </div>);
}

export default App;
