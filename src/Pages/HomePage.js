import React from 'react';
import Navbar from './Navbar';
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import MainSection from './MainSection';
const HomePage=() => {
    return (
        <div>
            <Navbar/>
            <hr width='1024px'/>
            <MainSection/>
        </div>
    )
}
export default HomePage;