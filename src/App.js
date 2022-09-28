import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage(App)';
import SignIn from './Pages/SignIn(App)';
import EventsPage from './Pages/EventsPage(App)';
import { SignUp } from './Pages/SignUp(App)';
import Error from './Pages/ErrorPages';
// import Admin from './Pages/AdminPage';
import './Pages/Styles.css'
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import {BrowserRouter, Routes , Route} from "react-router-dom";
const App=() =>{
 return (<div className='App m-auto width-1024px height-100'>
   <BrowserRouter>
   <Routes>
    <Route exact default path='/'  element={<HomePage/>}/>
    <Route path='/events' element={<EventsPage/>}/>
    <Route path='/users' element={<SignIn/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='*' element={<Error/>}/>
    <Route path='/signup' element={<SignUp/>}/>
   </Routes>
   </BrowserRouter>
 </div>);
}

export default App;
