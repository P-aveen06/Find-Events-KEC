import React from 'react';
import './App.css';
import SignIn from './Pages/SignIn(App)';
// import HomePage from './Pages/HomePage(App)';
// import { SignUp } from './Pages/SignUp(App)';
// import EventsPage from './Pages/EventsPage(App)';
import './Pages/Styles.css'
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
const App=() =>{
 return (<div className='App m-auto width-1024px height-100'>
   {/* <HomePage/> */}
   <SignIn/>
   {/* <EventsPage/> */}
   {/* <SignUp/> */}
 </div>);
}

export default App;
