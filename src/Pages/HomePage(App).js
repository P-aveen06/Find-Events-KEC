import React from 'react';
import Navbar from './Navbar(Home)';
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import MainSection from './MainSection(Home)';
import Footer from './Footer(Home)';
const HomePage=() => {
    return (
        <div>
            <Navbar/>
            <hr width='1024px'/>
            <MainSection/>
            <hr className='w-1024px mb-5'/>
            <Footer/>
        </div>
    )
}
export default HomePage;